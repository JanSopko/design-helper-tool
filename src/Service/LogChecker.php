<?php


namespace App\Service;


use Symfony\Component\HttpFoundation\Request;

class LogChecker
{
    public const LOGGED_USER_SESSION_KEY = 'logged_user';

    /**
     * @param Request $request
     * @return bool
     */
    public static function isLogged(Request $request): bool
    {
        return $request->getSession()->has(self::LOGGED_USER_SESSION_KEY);
    }
}
