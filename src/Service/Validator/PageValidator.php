<?php


namespace App\Service\Validator;


use App\Exception\ValidationException;

class PageValidator extends Validator
{
    private const THEME_ID_KEY = 'themeId';

    public function validate(array $content): void
    {
        $themeId = (int)($content['themeId'] ?? '');
        $this->validateThemeId($themeId);

        if (!empty($this->errorMessages)) {
            throw new ValidationException('Page validation failed.');
        }
    }

    public function getErrorMessages(): array
    {
        return $this->errorMessages;
    }

    private function validateThemeId(int $themeId): void
    {
        if (empty($themeId)) {
            $this->errorMessages[self::THEME_ID_KEY] = 'Invalid theme ID.';
        }
    }
}
