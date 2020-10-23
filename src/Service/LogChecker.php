<?php


namespace App\Service;


use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use function mysql_xdevapi\getSession;

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

    /**
     * @param Request $request
     * @param UserRepository $userRepository
     * @return User|null
     */
    public static function getLoggedUser(Request $request, UserRepository $userRepository): ?User
    {
        $user = $request->getSession()->get(self::LOGGED_USER_SESSION_KEY);
        if (!($user instanceof User)) {
            return null;
        }
        return $userRepository->find($user->getId());
    }
}
