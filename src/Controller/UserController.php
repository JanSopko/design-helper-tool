<?php declare(strict_types=1);


namespace App\Controller;


use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\UserRepository;
use App\Service\LogChecker;
use App\Service\RequestDataGetter;
use App\Service\Validator\RegistrationValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
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
     * @Route("/logins", name="login", methods={"POST"})
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
    public function register(
        Request $request
    ): JsonResponse {
//        $content = RequestDataGetter::getRequestData($request);
//        $registrationValidator = new RegistrationValidator($userRepository);
//        try {
//            $registrationValidator->validate($content);
//        } catch (ValidationException $exception) {
//            return new JsonResponse($registrationValidator->getErrorMessages());
//        }
//
//        //@todo code to register
//        $this->processRegistration(
//            $content['username'],
//            $content['password'],
//            $content['email']
//        );

        return new JsonResponse(['success' => true]);
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
                ->setPassword( $password);
        $em = $this->getDoctrine()->getManager();
        $em->persist($newUser);
        $em->flush();
    }
}
