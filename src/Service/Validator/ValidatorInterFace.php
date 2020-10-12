<?php

namespace App\Service\Validator;

use Symfony\Component\HttpFoundation\Request;

interface ValidatorInterFace
{
    public function validate(Request $request): void;

    public function getErrorMessages(): array;
}
