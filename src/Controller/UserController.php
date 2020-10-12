<?php declare(strict_types=1);


namespace App\Controller;


use App\Exception\ValidationException;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\Validator\RegistrationValidator;
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

    /**
     * @Route("/register", name="register", methods={"POST"})
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function register(Request $request, UserRepository $userRepository): JsonResponse
    {
        $registrationValidator = new RegistrationValidator($userRepository);
        try {
            $registrationValidator->validate($request);
        } catch (ValidationException $exception) {
            return new JsonResponse($registrationValidator->getErrorMessages());
        }

        //@todo code to register

        return new JsonResponse(['ok' => 1]);
    }
}
