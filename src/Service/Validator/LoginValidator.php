<?php


namespace App\Service\Validator;


use App\Entity\User;
use App\Exception\ValidationException;
use App\Repository\UserRepository;
use App\Service\PasswordManager;

class LoginValidator extends Validator
{
    private const CREDENTIALS_KEY = 'credentials';
    private const WRONG_CREDENTIALS_TEXT = 'Sorry, wrong credentials.';
    private const VALIDATION_FAILED_MESSAGE = 'Login validation failed.';

    private ?User $successFullyLoggedUser = null;

    /**
     * LoginValidator constructor.
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param array $content
     */
    public function validate(array $content): void
    {
        $username = $content['username'] ?? '';
        $password = $content['password'] ?? '';

        $user = $this->validateUsernameAndGetUser($username);
        $hashedPassword = $user->getPassword();
        $this->validatePassword($password, $hashedPassword);
        $this->successFullyLoggedUser = $user;
    }

    /**
     * @param string $username
     * @return User|null
     * @throws ValidationException
     */
    private function validateUsernameAndGetUser(string $username): ?User
    {
        $user = $this->userRepository->findOneBy(['username' => $username]);
        if ($user === null) {
            $this->throwWrongCredentials();
        }
        return $user;
    }

    /**
     * @throws ValidationException
     */
    private function throwWrongCredentials(): void
    {
        $this->errorMessages[self::CREDENTIALS_KEY] = self::WRONG_CREDENTIALS_TEXT;
        throw new ValidationException(self::VALIDATION_FAILED_MESSAGE);
    }

    /**
     * @param string $password
     * @param $hashedPassword
     * @throws ValidationException
     */
    private function validatePassword(string $password, $hashedPassword): void
    {
        if (!PasswordManager::isPasswordCorrect($password, $hashedPassword)) {
            $this->throwWrongCredentials();
        }
    }

    /**
     * @return array
     */
    public function getErrorMessages(): array
    {
        return $this->errorMessages;
    }

    /**
     * @return User|null
     */
    public function getSuccessFullyLoggedUser(): ?User
    {
        return $this->successFullyLoggedUser;
    }
}
