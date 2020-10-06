<?php declare(strict_types=1);


namespace App\Controller;


use App\Service\LogChecker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

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

    /**
     * @Route("/login", name="login", methods={"POST"})
     * @param Request $request
     * @param AuthenticationUtils $utils
     */
    public function login(Request $request, AuthenticationUtils $utils): JsonResponse
    {
        $error = $utils->getLastAuthenticationError();
        $lastUsername = $utils->getLastUsername();

        return new JsonResponse(['path' => 'login']);
    }
}
