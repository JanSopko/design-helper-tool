<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     * @Route("/home", name="home", methods={"GET"})
     */
    public function index()
    {
        return $this->render('home/hp_before_login.html.twig');
    }

    private function homepageBeforeLogin()
    {

    }

    private function homepageAfterLogin()
    {

    }
}
