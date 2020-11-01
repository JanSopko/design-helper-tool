<?php


namespace App\Service\Validator;


use App\Entity\Theme;
use App\Exception\ValidationException;
use App\Service\ThemePrivacyManager;

class ThemeValidator extends Validator
{
    public const NAME_KEY = 'name';
    public const PRIVACY_LEVEL_KEY = 'privacyLevel';
    public const DESCRIPTION_KEY = 'description';

    private const NAME_REGEX = '/^[a-zA-Z0-9]+/';
    private const NAME_MIN_LENGTH = 3;
    private const NAME_MAX_LENGTH = 30;
    private const DESCRIPTION_MAX_LENGTH = 255;

    /**
     * @param array $content
     * @throws ValidationException
     */
    public function validate(array $content): void
    {
        $name = $content[self::NAME_KEY] ?? '';
        $privacyLevel = (int)($content[self::PRIVACY_LEVEL_KEY] ?? '');
        $description = $content[self::DESCRIPTION_KEY];

        $this->validateName($name);
        $this->validatePrivacyLevel($privacyLevel);
        $this->validateDescription($description);

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
     * @param string $description
     */
    private function validateDescription(string $description): void
    {
        if (strlen($description) > self::DESCRIPTION_MAX_LENGTH) {
            $this->errorMessages[self::DESCRIPTION_KEY] =
                'Description must be shorter than ' . self::DESCRIPTION_MAX_LENGTH . ' characters';
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
