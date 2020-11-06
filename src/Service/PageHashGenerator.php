<?php


namespace App\Service;


use App\Entity\Theme;

class PageHashGenerator
{
    public static function generatePageHash(Theme $theme): string
    {
        $salt = random_int(1, 100000);
        return hash('adler32', hash('snefru', $theme->getId() . '-' . count($theme->getPages()) . '-' . $salt));
    }
}
