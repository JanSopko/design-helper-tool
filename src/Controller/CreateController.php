<?php declare(strict_types=1);


namespace App\Controller;


use App\Service\LogChecker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreateController extends AbstractController
{
    /**
     * @Route("/create-page")
     * @param Request $request
     * @return Response
     */
    public function createPage(Request $request): Response
    {
        if (!LogChecker::isLogged($request)) {
            return $this->redirectToRoute('signForm');
        }
        return $this->render('create/create.html.twig');
    }

    /**
     * @Route("/create")
     * @param Request $request
     * @return Response
     */
    public function create(Request $request): Response
    {
        if (!LogChecker::isLogged($request)) {
            return $this->redirectToRoute('signForm');
        }
        return $this->render('create/index.html.twig');
    }
}
