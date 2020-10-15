<?php

namespace App\Service\Validator;

use Symfony\Component\HttpFoundation\Request;

interface ValidatorInterFace
{
    public function validate(array $content): void;

    public function getErrorMessages(): array;
}
