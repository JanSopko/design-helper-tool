<?php


namespace App\Service;


use Symfony\Component\HttpFoundation\Request;

class RequestDataGetter
{
    /**
     * @param Request $request
     * @return array
     */
    public static function getRequestData(Request $request): array
    {
        switch ($request->getMethod()) {
            case "POST":
                return json_decode($request->getContent(), true) ?? [];
            case "GET":
            default:
                return $request->query->all();
        }
    }
}
