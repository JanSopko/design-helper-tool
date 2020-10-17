<?php


namespace App\Controller;


use App\Entity\Theme;
use App\Entity\User;
use App\Repository\ThemeRepository;
use App\Service\LogChecker;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ThemeController extends AbstractController
{
    /**
     * @Route("/browse", name="browse", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @return Response
     */
    public function browseThemes(Request $request, ThemeRepository $themeRepository): Response
    {
        return $this->getThemesData($request, $themeRepository);
    }

    /**
     * @Route("/theme/{themeId}", name="theme", methods={"GET"})
     * @param Request $request
     * @param string $themeId
     * @return Response
     */
    public function showTheme(Request $request, string $themeId): Response
    {

    }

    /**
     * @Route("/data/themes", name="themesData", methods={"GET"})
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @return JsonResponse
     */
    public function getThemesData(Request $request, ThemeRepository $themeRepository): JsonResponse
    {
        $user = $request->getSession()->get(LogChecker::LOGGED_USER_SESSION_KEY);
        $themes = $themeRepository->findBy(['privacyLevel' => Theme::GLOBALLY_VISIBLE]);
        if ($user instanceof User) {
            $themes = array_merge(
                $themes,
                $themeRepository->findBy(['privacyLevel' => Theme::COMMUNITY_VISIBLE])
            );
            $themes = array_merge($themes, $this->getMyPrivateThemes($request, $themeRepository));
        }

        return new JsonResponse($themes);
    }

    /**
     * @param Request $request
     * @param ThemeRepository $themeRepository
     * @return array
     */
    private function getMyPrivateThemes(Request $request, ThemeRepository $themeRepository): array
    {
        $loggedUser = $request->getSession()->get(LogChecker::LOGGED_USER_SESSION_KEY);
        return $themeRepository->findBy(['privacyLevel' => Theme::PRIVATE, 'user' => $loggedUser]);
    }
}
