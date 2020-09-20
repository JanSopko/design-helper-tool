<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    const VIEW_NAME_BEFORE_LOGIN = 'home/hp_before_login.html.twig';
    const VIEW_NAME_AFTER_LOGIN = 'home/hp_after_login.html.twig';

    /**
     * @Route("/", name="index", methods={"GET"})
     * @Route("/home", name="home", methods={"GET"})
     * @param ParameterBagInterface $parameterBag
     * @return Response
     */
    public function index(ParameterBagInterface $parameterBag): Response
    {
        $navbarParams = ($this->isLogged()) ?
            $parameterBag->get('nav_items')['logged'] : $parameterBag->get('nav_items')['non_logged'];
        return $this->render('home/homepage.html.twig', [
            'logged_user' => $this->isLogged(),
            'nav_items' => $navbarParams
        ]);
    }

    /**
     * dummy metoda
     * @return bool
     */
    private function isLogged(): bool
    {
        return false;
    }

    /**
     * @Route("/browse", name="browseTest", methods={"GET"})
     */
    public function browseTest(): JsonResponse
    {
        return new JsonResponse(['browse' => 'test']);
    }

    /**
     * @return Response
     */
    private function homepageBeforeLogin(): Response
    {
        return $this->render('home/hp_before_login.html.twig');
    }

    /**
     * @return Response
     */
    private function homepageAfterLogin(): Response
    {
        return $this->render('home/hp_after_login.html.twig');
    }
}
