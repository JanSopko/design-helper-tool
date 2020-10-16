<?php declare(strict_types=1);


namespace App\Controller;


use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\PasswordManager;
use App\Service\RequestDataGetter;
use App\Service\Validator\LoginValidator;
use App\Service\Validator\RegistrationValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/sign", name="signForm", methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function showSignForm(Request $request): Response
    {
        if (LogChecker::isLogged($request)) {
            return $this->redirectToRoute("index");
        }
        return $this->render("/user/sign.html.twig");
    }

    /**
     * @Route("/login", name="login", methods={"POST"})
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function login(Request $request, UserRepository $userRepository): JsonResponse
    {
        $content = RequestDataGetter::getRequestData($request);
        $loginValidator = new LoginValidator($userRepository);
        try {
            $loginValidator->validate($content);
        } catch (ValidationException $exception) {
            return new JsonResponse($loginValidator->getErrorMessages());
        }
        $user = $loginValidator->getSuccessFullyLoggedUser();
        $request->getSession()->set(LogChecker::LOGGED_USER_SESSION_KEY, $user);

        return new JsonResponse(['success' => true]);
    }

    /**
     * @Route("/register", name="register", methods={"POST"})
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function register(Request $request, UserRepository $userRepository): JsonResponse
    {
        $content = RequestDataGetter::getRequestData($request);
        $registrationValidator = new RegistrationValidator($userRepository);
        try {
            $registrationValidator->validate($content);
        } catch (ValidationException $exception) {
            return new JsonResponse($registrationValidator->getErrorMessages());
        }

        $this->processRegistration($content['username'], $content['password'], $content['email']);

        return new JsonResponse(['success' => true]);
    }

    /**
     * @Route("/logout", name="logout", methods={"POST"})
     * @param Request $request
     * @return RedirectResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $request->getSession()->remove(LogChecker::LOGGED_USER_SESSION_KEY);
        return new JsonResponse(["success" => true]);
    }

    /**
     * @param string $username
     * @param string $password
     * @param string $email
     */
    private function processRegistration(
        string $username,
        string $password,
        string $email
    ): void {
        $newUser = new User();
        $newUser->setUsername($username)
                ->setEmail($email)
                ->setPassword(PasswordManager::encodePassword($password));
        $em = $this->getDoctrine()->getManager();
        $em->persist($newUser);
        $em->flush();
    }
}
