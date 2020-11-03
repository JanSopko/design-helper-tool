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
use App\Service\RequestDataGetter;
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
     * @Route("/testing_response")
     * @return Response
     */
    public function showPagePreview(): Response
    {
        $html = "<div><div class='grn'>Hello World!</div><ul><li>1</li><li>2</li></ul></div>";
        $css = ".grn{color:green}ul{background-color:red}";

        $res = "<style>$css</style>$html";
        return new Response($res);
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

        $page = new Page();
        $page->setTheme($theme);
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

    public function deletePage()
    {

    }
}
