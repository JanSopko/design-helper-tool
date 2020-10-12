<?php


namespace App\Service\Validator;


use Symfony\Component\HttpFoundation\Request;

abstract class Validator implements ValidatorInterFace
{
    /** @var string[] */
    protected array $errorMessages;

    protected function getRequestContent(Request $request): array
    {
        return json_decode($request->getContent(), true);
    }
}
