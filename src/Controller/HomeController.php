<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     * @Route("/home", name="home", methods={"GET"})
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('home/homepage.html.twig');
    }

    /**
     * @Route("/browse", name="browseTest", methods={"GET"})
     */
    public function browseTest(): JsonResponse
    {
        return new JsonResponse(['browse' => 'test']);
    }
}
