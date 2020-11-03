<?php


namespace App\Controller;


use App\Entity\Theme;
use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\ThemeRepository;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\RequestDataGetter;
use App\Service\ThemePrivacyManager;
use App\Service\Validator\ThemeValidator;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ThemeController extends AbstractController
{
    private ?ObjectManager $entityManager = null;

    /**
     * @Route("/browse", name="browse", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @return Response
     */
    public function browseThemes(Request $request, ThemeRepository $themeRepository): Response
    {
        return $this->render('browse/index.html.twig');
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
        if ($theme === null || !$this->canUserSeeTheme($user, $theme)) {
            throw $this->createNotFoundException();
        }
        return $this->render('themes/theme.html.twig', [
            'theme' => $theme->jsonSerialize(),
            'isMyTheme' => ($user instanceof  User) ? $theme->getUser()->getId() === $user->getId() : false
        ]);
    }

    /**
     * @param ?User $user
     * @param Theme $theme
     * @return bool
     */
    private function canUserSeeTheme(?User $user, Theme $theme): bool
    {
        if ($theme->getPrivacyLevel() === ThemePrivacyManager::GLOBALLY_VISIBLE) {
            return true;
        }
        if ($user instanceof User && $theme->getPrivacyLevel() === ThemePrivacyManager::COMMUNITY_VISIBLE) {
            return true;
        }
        if ($user instanceof User
            && $theme->getPrivacyLevel() === ThemePrivacyManager::PRIVATE
            && $theme->getUser()->getId() === $user->getId()) {
            return true;
        }
        return false;
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
        $user = $request->getSession()->get(LogChecker::LOGGED_USER_SESSION_KEY);
        $themes = $themeRepository->findBy(['privacyLevel' => ThemePrivacyManager::GLOBALLY_VISIBLE]);
        if ($user instanceof User) {
            $themes = array_merge(
                $themes,
                $themeRepository->findBy(['privacyLevel' => ThemePrivacyManager::COMMUNITY_VISIBLE])
            );
            $themes = array_merge($themes, $this->getMyPrivateThemes($request, $themeRepository, $userRepository));
        }

        return new JsonResponse($themes);
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
    ): JsonResponse {
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
        if ($this->canUserSeeTheme($user, $theme)) {
            return new JsonResponse($theme);
        }
        return new JsonResponse(['not ok']);
    }

    public function updateTheme()
    {

    }

    /**
     * @Route("/delete/theme/{themeId}", name="deleteTheme", methods={"POST","GET"})
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
        //@todo REFACTOR!!!
        $theme = $themeRepository->find($themeId);
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if (!($theme instanceof Theme) || $this->canUserSeeTheme($user, $theme)) {
            return new JsonResponse(['success' => false, 'message' => 'Theme not found.']);
        }
        if (!($user instanceof User) || $theme->getUser()->getId() !== $user->getId()) {
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
        //@todo userId premysliet
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
}
