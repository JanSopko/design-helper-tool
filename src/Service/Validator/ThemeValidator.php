<?php


namespace App\Service\Validator;


use App\Entity\Theme;
use App\Exception\ValidationException;
use App\Service\ThemePrivacyManager;

class ThemeValidator extends Validator
{
    private const NAME_KEY = 'name';
    private const PRIVACY_LEVEL_KEY = 'privacyLevel';

    private const NAME_REGEX = '/^[a-zA-Z0-9]+/';
    private const NAME_MIN_LENGTH = 3;
    private const NAME_MAX_LENGTH = 30;

    /**
     * @param array $content
     * @throws ValidationException
     */
    public function validate(array $content): void
    {
        $name = $content['name'] ?? '';
        $privacyLevel = (int)($content['privacyLevel'] ?? '');

        $this->validateName($name);
        $this->validatePrivacyLevel($privacyLevel);

        if (!empty($this->errorMessages)) {
            throw new ValidationException('Theme validation failed.');
        }
    }

    /**
     * @param string $name
     */
    private function validateName(string $name): void
    {
        if (empty($name)) {
            $this->errorMessages[self::NAME_KEY] = 'Please enter Theme name.' . $name;
        } elseif (strlen($name) < self::NAME_MIN_LENGTH) {
            $this->errorMessages[self::NAME_KEY] = 'Theme name should be at least ' . self::NAME_MIN_LENGTH . ' characters.';
        } elseif (strlen($name) > self::NAME_MAX_LENGTH) {
            $this->errorMessages[self::NAME_KEY] = 'Theme name should be less than ' . self::NAME_MAX_LENGTH . ' characters.';
        } elseif (!preg_match(self::NAME_REGEX, $name)) {
            $this->errorMessages[self::NAME_KEY] = 'Name must only consist of alphanumeric characters.';
        }
    }

    /**
     * @param int $privacyLevel
     */
    private function validatePrivacyLevel(int $privacyLevel): void
    {
        if (empty($privacyLevel)) {
            $this->errorMessages[self::PRIVACY_LEVEL_KEY] = 'Please choose privacy setting.' . $privacyLevel;
        } elseif (!in_array($privacyLevel, ThemePrivacyManager::ALLOWED_PRIVACY_LEVEL_VALUES)) {
            $this->errorMessages[self::PRIVACY_LEVEL_KEY] = 'Unknown option of privacy settings.';
        }
    }

    /**
     * @return array
     */
    public function getErrorMessages(): array
    {
        return $this->errorMessages;
    }
}
