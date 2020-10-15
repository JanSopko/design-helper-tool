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
        return json_decode($request->getContent(), true);
    }
}
