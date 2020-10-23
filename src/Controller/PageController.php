<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{

    /**
     * @Route("/testing_response")
     * @return Response
     */
    public function showPagePreview(): Response
    {
        $html = "<div><div class='grn'>Hello World!</div><ul><li>1</li><li>2</li></ul></div>";
        $css = ".grn{color:green}ul{background-color:red}";

        $res = "<style>$css</style>$html";
        return new Response($res);
    }

    public function createPage()
    {

    }

    public function readPage()
    {

    }

    public function updatePage()
    {

    }

    public function deletePage()
    {

    }

}
