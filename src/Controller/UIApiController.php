<?php declare(strict_types=1);


namespace App\Controller;


use App\Service\LogChecker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class UIApiController extends AbstractController
{
    /**
     * @var ParameterBagInterface
     */
    private ParameterBagInterface $parameterBag;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;
    }

    /**
     * @Route("/ui-data/navbar", name="uiNavbar", methods={"GET"})
     * @return JsonResponse
     */
    public function getNavbar(): JsonResponse
    {
        $navbarParams = (LogChecker::isLogged()) ?
            $this->parameterBag->get('nav_items')['logged'] : $this->parameterBag->get('nav_items')['non_logged'];
        return new JsonResponse($navbarParams);
    }
}
