<?php


namespace App\Service;


use App\Entity\Theme;
use App\Entity\User;

class ThemePrivacyManager
{
    public const PRIVATE = 1;
    public const COMMUNITY_VISIBLE = 2;
    public const GLOBALLY_VISIBLE = 3;

    public const ALLOWED_PRIVACY_LEVEL_VALUES = [
        self::PRIVATE,
        self::COMMUNITY_VISIBLE,
        self::GLOBALLY_VISIBLE
    ];

    public const PRIVACY_LEVELS_DESCRIPTIONS = [
        [
            'id' => self::PRIVATE,
            'description' => 'Private (visible only for owner)'
        ],
        [
            'id' => self::COMMUNITY_VISIBLE,
            'description' => 'Visible for logged users only'
        ],
        [
            'id' => self::GLOBALLY_VISIBLE,
            'description' => 'Visible for everyone'
        ]
    ];

    /**
     * @param User|null $user
     * @param Theme $theme
     * @return bool
     */
    public static function canUserSeeTheme(?User $user, Theme $theme): bool
    {
        if ($theme->getPrivacyLevel() === self::GLOBALLY_VISIBLE) {
            return true;
        }
        if ($user instanceof User && $theme->getPrivacyLevel() === self::COMMUNITY_VISIBLE) {
            return true;
        }
        return ($user instanceof User
            && $theme->getPrivacyLevel() === self::PRIVATE
            && $theme->getUser()->getId() === $user->getId());
    }
}
