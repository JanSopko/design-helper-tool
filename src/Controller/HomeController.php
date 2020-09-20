<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
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
}
