<?php


namespace App\Service;


class LogChecker
{
    /**
     * @return bool
     */
    public static function isLogged(): bool
    {
        //@todo real logged status check
        return !empty($_SESSION['logged_user']);
    }
}
