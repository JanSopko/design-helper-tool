<?php


namespace App\Controller;


use App\Entity\Page;
use App\Entity\Theme;
use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\PageRepository;
use App\Repository\ThemeRepository;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\PageHashGenerator;
use App\Service\RequestDataGetter;
use App\Service\ThemePrivacyManager;
use App\Service\Validator\PageValidator;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    private ?ObjectManager $entityManager = null;

    /**
     * @Route("/preview-page/{pageHash}", name="previewPage", methods={"GET"})
     * @param Request $request
     * @param string $pageHash
     * @param PageRepository $pageRepository
     * @param UserRepository $userRepository
     * @return Response
     */
    public function previewPage(Request $request, string $pageHash, PageRepository $pageRepository, UserRepository $userRepository): Response
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $page = $pageRepository->findOneBy([
            'urlHash' => $pageHash
        ]);
        if (!$page instanceof Page || !ThemePrivacyManager::canUserSeeTheme($user, $page->getTheme())) {
            return new Response("Page does not exist.");
        }
        $pageHtml = $page->getPageHtml();
        $pageCss = $page->getPageCss();
        $responseBody = "<style>$pageCss</style>$pageHtml";
        return new Response($responseBody);
    }

    /**
     * @Route("/design-page/{pageHash}")
     * @param Request $request
     * @param string $pageHash
     * @param PageRepository $pageRepository
     * @param UserRepository $userRepository
     * @return Response
     */
    public function designPage(
        Request $request,
        string $pageHash,
        PageRepository $pageRepository,
        UserRepository  $userRepository): Response
    {
        $page = $pageRepository->findOneBy([
            'urlHash' => $pageHash
        ]);
        if (!$page instanceof  Page) {
            return $this->redirectToRoute('browse');
        }
        $theme = $page->getTheme();
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if (
            !($user instanceof User) ||
            !($theme instanceof Theme) ||
            $user->getId() !== $theme->getUser()->getId()
        ) {
            return $this->redirectToRoute('browse');
        }
        return $this->render('create/create.html.twig', [
            'page_hash' => $pageHash
        ]);
    }

    /**
     * @Route("/create/page", name="createPage", methods={"POST"})
     * @param Request $request
     * @param UserRepository $userRepository
     * @param ThemeRepository $themeRepository
     * @return JsonResponse
     */
    public function createPage(
        Request $request,
        UserRepository $userRepository,
        ThemeRepository $themeRepository
    ): JsonResponse {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        if (!$user instanceof User) {
            return new JsonResponse(['success' => false, 'message' => 'You must be logged in to create pages.'],
                Response::HTTP_PRECONDITION_REQUIRED);
        }

        $requestContent = RequestDataGetter::getRequestData($request);
        $pageValidator = new PageValidator();
        try {
            $pageValidator->validate($requestContent);
        } catch (ValidationException $exception) {
            return new JsonResponse($pageValidator->getErrorMessages());
        }
        $theme = $themeRepository->find($requestContent['themeId']);
        if (!$theme instanceof Theme) {
            return new JsonResponse(['success' => false, 'message' => 'Theme not found.']);
        }
        if ($theme->getUser()->getId() !== $user->getId()) {
            return new JsonResponse(['success' => false, 'message' => 'Permission denied.']);
        }

        $pageHash = PageHashGenerator::generatePageHash($theme);
        $page = new Page();
        $page->setTheme($theme);
        $page->setUrlHash($pageHash);
        $em = $this->getEntityManager();
        $em->persist($page);
        $em->flush();

        return new JsonResponse(['success' => 'true']);
    }

    /**
     * @Route("/data/theme/{themeId}/pages", name="getPagesOfTheme", methods={"GET"})
     * @param ThemeRepository $themeRepository
     * @param int $themeId
     * @param PageRepository $pageRepository
     * @return JsonResponse
     */
    public function getPagesOfTheme(ThemeRepository $themeRepository, int $themeId, PageRepository $pageRepository): JsonResponse
    {
        $theme = $themeRepository->find($themeId);
        if ($theme === null) {
            return new JsonResponse([]);
        }
        $pages = $pageRepository->findBy([
            'theme' => $theme
        ]);
        return new JsonResponse($pages);
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

    public function readPage()
    {

    }

    public function updatePage()
    {

    }

    /**
     * @Route("/delete/page/{pageId}", name="deletePage", methods={"DELETE"})
     * @param Request $request
     * @param int $pageId
     * @param UserRepository $userRepository
     * @param PageRepository $pageRepository
     * @return JsonResponse
     */
    public function deletePage(
        Request $request,
        int $pageId,
        UserRepository $userRepository,
        PageRepository $pageRepository): JsonResponse
    {
        $user = LogChecker::getLoggedUser($request, $userRepository);
        $page = $pageRepository->find($pageId);

        if (!($user instanceof User) || !($page instanceof Page)) {
            return new JsonResponse(['success' => false, 'message' => "Permission denied."]);
        }

        $theme = $page->getTheme();

        if (!($theme instanceof Theme) || $theme->getUser()->getId() !== $user->getId()) {
            return new JsonResponse(['success' => false, 'message' => "Permission denied."]);
        }

        $em = $this->getEntityManager();
        $em->remove($page);
        $em->flush();
        return new JsonResponse(['success' => true]);
    }
}
