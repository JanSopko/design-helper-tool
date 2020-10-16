<?php


namespace App\Service;


class PasswordManager
{
    const PASSWORD_ENCODE_ALGO = PASSWORD_DEFAULT;
    /**
     * @param string $password
     * @return string
     */
    public static function encodePassword(string $password): string
    {
        return password_hash($password, self::PASSWORD_ENCODE_ALGO);
    }

    public static function isPasswordCorrect(string $password, string $hashedPassword): bool
    {
        return password_verify($password, $hashedPassword);
    }
}
