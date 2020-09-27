<?php


namespace App\Controller;


use App\Service\LogChecker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/sign", name="signForm", methods={"GET"})
     * @return Response
     */
    public function showSignForm(): Response
    {
        if (LogChecker::isLogged()) {
           return $this->redirectToRoute("index");
        }
        return $this->render("/user/sign.html.twig");
    }
}
