<?php


namespace App\Service\Validator;


use App\Exception\ValidationException;

class PageValidator extends Validator
{
    private const THEME_ID_KEY = 'themeId';
    private const NAME_KEY = 'name';

    private const NAME_MAX_LENGTH = 30;
    private const NAME_MIN_LENGTH = 3;
    private const NAME_REGEX = '/^[a-zA-Z0-9]*$/';

    public function validate(array $content): void
    {
        $themeId = (int)($content['themeId'] ?? '');
        $name = $content['name'];
        $this->validateThemeId($themeId);
        $this->validateName($name);

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

    private function validateName(string $name): void
    {
        if (empty($name)) {
            $this->errorMessages[self::NAME_KEY] = 'Please enter page name.';
        } else if (strlen($name) < self::NAME_MIN_LENGTH) {
            $this->errorMessages[self::NAME_KEY] = 'Page name must be at least ' . self::NAME_MIN_LENGTH . ' characters long.';
        } else if (strlen($name) > self::NAME_MAX_LENGTH) {
            $this->errorMessages[self::NAME_KEY] = 'Page name must be shorter than ' . self::NAME_MAX_LENGTH . ' characters.';
        } else if (!preg_match(self::NAME_REGEX, $name)) {
            $this->errorMessages[self::NAME_KEY] = 'Page name must only contain alphanumeric characters.';
        }
    }
}
