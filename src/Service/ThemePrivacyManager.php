<?php


namespace App\Service;


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

}
