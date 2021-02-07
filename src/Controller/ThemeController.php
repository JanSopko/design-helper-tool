<?php


namespace App\Controller;


use App\Entity\Theme;
use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\ThemeRepository;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\RequestDataGetter;
use App\Service\ThemeNameManager;
use App\Service\ThemePrivacyManager;
use App\Service\Validator\ThemeValidator;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use ZipArchive;

class ThemeController extends AbstractController
{
    private ?ObjectManager $entityManager = null;

    const COUNT_OF_THEMES_ON_PAGE = 16;

    /**
     * @Route("/browse", name="browse", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @return Response
     */
    public function browseThemes(Request $request, ThemeRepository $themeRepository): Response
    {
        $page = RequestDataGetter::getRequestData($request)['page'] ?? 1;
        $page = (int)$page;
        if ($page < 1) $page = 1;
        return $this->render('browse/index.html.twig', [
            'page' => $page
        ]);
    }

    /**
     * @Route("/my_themes", name="myThemes", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return Response
     */
    public function showMyThemes(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): Response {
        $myThemes = $this->getMyAllThemes($request, $themeRepository, $userRepository);
        return $this->render('myThemes/my_themes.html.twig', [
            'my_themes' => json_encode($myThemes)
        ]);
    }

    private function getMyAllThemes(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): array {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        return $themeRepository->findBy(['user' => $user]);
    }

    /**
     * @Route("/themesOf/{username}")
     * @param string $username
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return Response
     */
    public function showThemesOfUser(
        string $username,
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository): Response
    {
        $themes = $this->getThemesOfUserByUsername($username, $userRepository, $themeRepository, $request);
        return $this->render('browse/themesOf.html.twig', [
            'username' => $username,
            'themes' => json_encode($themes)
        ]);
    }

    private function getThemesOfUserByUsername(
        string $username,
        UserRepository $userRepository,
        ThemeRepository $themeRepository,
        Request $request) : array
    {
        $user = $userRepository->findBy([
            'username' => $username
        ]);
        $allUsersThemes = $themeRepository->findBy([
            'user' => $user
        ]);
        $loggedUser = LogChecker::getLoggedUser($request, $userRepository);
        $visibleUsersThemes = [];
        $visibilityConditions = [ThemePrivacyManager::GLOBALLY_VISIBLE];
        if (LogChecker::isLogged($request)) {
            $visibilityConditions[] = ThemePrivacyManager::COMMUNITY_VISIBLE;
        }
        if ($loggedUser instanceof User && $loggedUser->getUsername() === $username) {
            return $allUsersThemes;
        }
        foreach ($allUsersThemes as $theme) {
            if (in_array($theme->getPrivacyLevel(), $visibilityConditions, true)) {
                $visibleUsersThemes[] = $theme;
            }
        }

        return $visibleUsersThemes;
    }

    /**
     * @Route("/data/themesOf/{username}")
     * @param string $username
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @param Request $request
     * @return JsonResponse
     */
    public function getThemesOfUserByUsernameJson(
        string $username,
        ThemeRepository $themeRepository,
        UserRepository $userRepository,
        Request $request): JsonResponse
    {
        return new JsonResponse($this->getThemesOfUserByUsername($username, $userRepository, $themeRepository, $request));
    }

    /**
     * @Route("/data/my_all_themes", name="myAllTHemes", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function getMyAllThemesData(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): JsonResponse {
        return new JsonResponse($this->getMyAllThemes($request, $themeRepository,
        $userRepository));
    }

    /**
     * @Route("/theme/{themeId}", name="theme", methods={"GET"})
     * @param Request $request
     * @param string $themeId
     * @param ThemeRepository $themeRepository
     * @return Response
     */
    public function showTheme(Request $request, string $themeId, ThemeRepository $themeRepository): Response
    {
        $theme = $themeRepository->find($themeId);
        $user = $request->getSession()->get(LogChecker::LOGGED_USER_SESSION_KEY);
        if ($theme === null || !ThemePrivacyManager::canUserSeeTheme($user, $theme)) {
            throw $this->createNotFoundException();
        }
        return $this->render('themes/theme.html.twig', [
            'theme' => $theme->jsonSerialize(),
            'isMyTheme' => ($user instanceof  User) ? $theme->getUser()->getId() === $user->getId() : false
        ]);
    }

    /**
     * @Route("/data/themes", name="themesData", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function getThemesData(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): JsonResponse {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $themes = $this->getThemesDataArray($user, $request, $themeRepository, $userRepository);
        $page = RequestDataGetter::getRequestData($request)['page'] ?? 1;
        $page = (int)$page;
        if ($page < 1) $page = 1; // ak user zadal stranku menej ako 1
        $themesOnPage = [];
        $offset = ($page - 1) * self::COUNT_OF_THEMES_ON_PAGE;
        for ($i = $offset; $i < $offset + self::COUNT_OF_THEMES_ON_PAGE; $i++) {
            if (!empty($themes[$i])) {
                $themesOnPage[] = $themes[$i];
            }
        }
        return new JsonResponse($themesOnPage);
    }

    /**
     * @Route("/data/pages_count", name="pagesCount", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function getPagesCountResponse(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository): JsonResponse
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $themes = $this->getThemesDataArray($user, $request, $themeRepository, $userRepository);
        return new JsonResponse(['pagesCount' => $this->getPagesCount($themes)]);
    }

    /**
     * @param array $themes
     * @return int
     */
    private function getPagesCount(array $themes): int
    {
        return ceil(count($themes) / self::COUNT_OF_THEMES_ON_PAGE);
    }

    /**
     * @param User|null $user
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return array
     */
    private function getThemesDataArray(
        ?User $user,
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): array {
        $themes = $themeRepository->findBy(['privacyLevel' => ThemePrivacyManager::GLOBALLY_VISIBLE]);
        if ($user instanceof User) {
            $themes = array_merge(
                $themes,
                $themeRepository->findBy(['privacyLevel' => ThemePrivacyManager::COMMUNITY_VISIBLE])
            );
            $themes = array_merge($themes, $this->getMyPrivateThemes($request, $themeRepository, $userRepository));
        }

        return $themes;
    }

    /**
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return array
     */
    private function getMyPrivateThemes(
        Request $request,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): array {
        $loggedUser = LogChecker::getLoggedUser($request, $userRepository);
        return $themeRepository->findBy(['privacyLevel' => ThemePrivacyManager::PRIVATE, 'user' => $loggedUser]);
    }

    /**
     * @Route("/create-theme", name="createThemeForm", methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function showCreateThemeForm(Request $request): Response
    {
        return $this->render('create/createThemeForm.html.twig');
    }

    /**
     * @Route("/create/theme", name="createTheme", methods={"POST","GET"})
     * @param Request $request
     * @param UserRepository $userRepository
     * @param ThemeRepository $themeRepository
     * @return JsonResponse
     */
    public function createTheme(
        Request $request,
        UserRepository $userRepository,
        ThemeRepository $themeRepository
    ): JsonResponse
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if ($user === null) {
            return new JsonResponse([
                'success' => false,
                'message' => 'You must be logged to create themes.'
            ]);
        }
        $requestContent = RequestDataGetter::getRequestData($request);
        $themeValidator = new ThemeValidator();
        try {
            $themeValidator->validate($requestContent);
        } catch (ValidationException $exception) {
            return new JsonResponse($themeValidator->getErrorMessages());
        }
        if ($this->userHasThemeWithSameName($user, $requestContent[ThemeValidator::NAME_KEY], $themeRepository)) {
            return new JsonResponse([
                'success' => false,
                'message' => 'You already have a Theme with the same name.'
            ]);
        }
        $theme = $this->createThemeFromRequestContent($user, $requestContent);

        $em = $this->getEntityManager();
        $em->persist($theme);
        $em->flush();

        return new JsonResponse(['success' => true]);
    }

    /**
     * @return ObjectManager
     */
    private function getEntityManager(): ObjectManager
    {
        if ($this->entityManager === null) {
            $this->entityManager = $this->getDoctrine()->getManager();
        }
        return $this->entityManager;
    }

    /**
     * @Route("/data/theme/{themeId}")
     * @param Request $request
     * @param int $themeId
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function readTheme(
        Request $request,
        int $themeId,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): JsonResponse
    {
        //@todo REFACTOR!
        $theme = $themeRepository->find($themeId);
        if ($theme instanceof Theme) {
            throw $this->createNotFoundException();
        }
        $privacyLevel = $theme->getPrivacyLevel();
        if ($privacyLevel === ThemePrivacyManager::GLOBALLY_VISIBLE) {
            return new JsonResponse($theme);
        }
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if (ThemePrivacyManager::canUserSeeTheme($user, $theme)) {
            return new JsonResponse($theme);
        }
        return new JsonResponse(['not ok']);
    }

    /**
     * @Route("/data/update_theme/{themeId}")
     * @param Request $request
     * @param int $themeId
     * @param UserRepository $userRepository
     * @param ThemeRepository $themeRepository
     * @return JsonResponse
     */
    public function updateTheme(
        Request $request,
        int $themeId,
        UserRepository $userRepository,
        ThemeRepository $themeRepository
    ): JsonResponse
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $theme = $themeRepository->find($themeId);
        //ak user nevlastni temu
        if (!($user instanceof User) || !($theme instanceof Theme) || $user->getId() !== $theme->getUser()->getId()) {
            return new JsonResponse(['success' => false, 'message' => 'You can not update this theme.']);
        }
        $content = RequestDataGetter::getRequestData($request);
        $themeValidator = new ThemeValidator();
        try {
            $themeValidator->validate($content);
        } catch (ValidationException $e) {
            return new JsonResponse(['success' => false, 'errors' => $themeValidator->getErrorMessages()]);
        }

        $theme->setName($content[ThemeValidator::NAME_KEY]);
        $theme->setPrivacyLevel($content[ThemeValidator::PRIVACY_LEVEL_KEY]);
        $theme->setDescription($content[ThemeValidator::DESCRIPTION_KEY]);

        $em = $this->getEntityManager();
        $em->persist($theme);
        $em->flush();

        return new JsonResponse(['success' => true, 'message' => 'Theme successfully updated!']);
    }

    /**
     * @Route("/delete/theme/{themeId}", name="deleteTheme", methods={"DELETE"})
     * @param Request $request
     * @param int $themeId
     * @param ThemeRepository $themeRepository
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function deleteTheme(
        Request $request,
        int $themeId,
        ThemeRepository $themeRepository,
        UserRepository $userRepository
    ): JsonResponse {
        $theme = $themeRepository->find($themeId);
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if (!($user instanceof  User) || !($theme instanceof Theme) || !ThemePrivacyManager::canUserSeeTheme($user, $theme)) {
            return new JsonResponse(['success' => false, 'message' => 'Theme not found.']);
        }
        if ($theme->getUser()->getId() !== $user->getId()) {
            return new JsonResponse(['success' => false, 'message' => 'Permission denied.']);
        }

        $em = $this->getEntityManager();
        $em->remove($theme);
        $em->flush();
        return new JsonResponse(['success' => true]);
    }

    /**
     * @param User $user
     * @param array $requestContent
     * @return Theme
     */
    private function createThemeFromRequestContent(User $user, array $requestContent): Theme
    {
        $name = $requestContent[ThemeValidator::NAME_KEY];
        $privacyLevel = $requestContent[ThemeValidator::PRIVACY_LEVEL_KEY];
        $description = $requestContent[ThemeValidator::DESCRIPTION_KEY];

        $theme = new Theme();
        $theme->setName($name)
            ->setUser($user)
            ->setPrivacyLevel($privacyLevel)
            ->setDescription($description);

        return $theme;
    }

    /**
     * @param User $user
     * @param string $name
     * @param ThemeRepository $themeRepository
     * @return bool
     */
    private function userHasThemeWithSameName(User $user, string $name, ThemeRepository $themeRepository): bool
    {
       return $themeRepository->findOneBy(['name' => $name, 'user' => $user]) !== null;
    }

    /**
     * @Route("/data/allowed_privacy_levels", name="allowedPrivacyLevels", methods={"GET"})
     * @return JsonResponse
     */
    public function getAllowedPrivacyLevels(): JsonResponse
    {
        return new JsonResponse(ThemePrivacyManager::PRIVACY_LEVELS_DESCRIPTIONS);
    }

    /**
     * @Route("/download-theme/{themeId}")
     * @param Request $request
     * @param int $themeId
     * @param UserRepository $userRepository
     * @param ThemeRepository $themeRepository
     * @return JsonResponse
     */
    public function downloadTheme(
        Request $request,
        int $themeId,
        UserRepository $userRepository,
        ThemeRepository $themeRepository): Response
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $theme = $themeRepository->find($themeId);
        if (!$theme instanceof Theme || !ThemePrivacyManager::canUserSeeTheme($user, $theme)) {
            return new Response('Theme does not exist.');
        }
        $authorName = ($user instanceof User) ? $user->getUsername() : '';
        $themeName = ThemeNameManager::generateNameForDownload($theme->getName(), $authorName);
        $pages = $theme->getNonEmptyPages();
        if ($pages->isEmpty()) {
            return new Response('Theme is empty.');
        }

        $zip = new ZipArchive();
        if (!$zip->open("themes/$themeName.zip", ZipArchive::CREATE)) {
            return new Response('Zip Creation failed.');
        }

        foreach ($pages as $page) {
            $pageName = $page->getName();
            $file = fopen("themes/$pageName.html", 'w+');
            fwrite($file, $page->getBody());
            fclose($file);
            $latestPage = "$pageName.html";
            $zip->addFile("themes/$latestPage");
//            unlink("themes/$latestPage");
        }

        return $this->redirectToRoute('downloadThemeZip', ['themeName' => $themeName]);
    }

    /**
     * @Route("/download-theme-zip/{themeName}", name="downloadThemeZip", methods={"GET"})
     * @param string $themeName
     * @return BinaryFileResponse
     */
    public function downloadThemeZip(string $themeName): BinaryFileResponse
    {
        $response =  $this->file("themes/$themeName.zip");
//        unlink("themes/$themeName.zip");
        return $response;
    }
}
