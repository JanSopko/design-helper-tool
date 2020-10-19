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
        return $this->render('browse/index.html.twig');
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
        if($theme === null  || !$this->canUserSeeTheme($user, $theme)) {
            throw $this->createNotFoundException();
        }
        return $this->render('themes/theme.html.twig', [
            'theme' => $theme->jsonSerialize()
        ]);
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

    /**
     * @param ?User $user
     * @param Theme $theme
     * @return bool
     */
    private function canUserSeeTheme(?User $user, Theme $theme): bool
    {
        if ($theme->getPrivacyLevel() === Theme::GLOBALLY_VISIBLE) {
            return true;
        }
        if ($user instanceof User && $theme->getPrivacyLevel() === Theme::COMMUNITY_VISIBLE) {
            return true;
        }
        if ($user instanceof User
            && $theme->getPrivacyLevel() === Theme::PRIVATE
            && $theme->getUser()->getId() === $user->getId()) {
            return true;
        }
        return false;
    }
}
