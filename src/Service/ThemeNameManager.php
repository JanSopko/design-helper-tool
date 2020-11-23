<?php
declare(strict_types=1);


namespace App\Service;


class ThemeNameManager
{
    /**
     * @param string $themeName
     * @param string $authorUsername
     * @return string
     */
    public static function generateNameForDownload(string $themeName, string $authorUsername = ''): string
    {
        return empty($authorUsername) ? $themeName : "$themeName (HTML theme by $authorUsername)";
    }
}
