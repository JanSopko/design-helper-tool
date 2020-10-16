<?php


namespace App\Service\Validator;


use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;

abstract class Validator implements ValidatorInterFace
{
    /** @var string[] */
    protected array $errorMessages;

    protected UserRepository $userRepository;
}
