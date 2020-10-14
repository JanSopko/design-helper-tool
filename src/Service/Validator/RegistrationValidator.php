<?php declare(strict_types=1);


namespace App\Service\Validator;


use App\Exception\ValidationException;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;

class RegistrationValidator extends Validator
{
    const USERNAME_KEY = 'username';
    const EMAIL_KEY = 'email';
    const PASSWORD_KEY = 'password';
    const PASSWORD_CONFIRM_KEY = 'passwordConfirm';

    const USERNAME_MIN_LENGTH = 4;
    const USERNAME_MAX_LENGTH = 25;
    const PASSWORD_MIN_LENGTH = 6;
    const PASSWORD_MAX_LENGTH = 256; //length in db
    const PASSWORD_REGEX = '/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/';
    const EMAIL_REGEX = '/^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/';

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param Request $request
     * @throws ValidationException
     */
    public function validate(Request $request): void
    {
        $content = $this->getRequestContent($request);
        $username = $content['username'] ?? '';
        $email = $content['email'] ?? '';
        $password = $content['password'] ?? '';
        $passwordConfirm = $content['password-confirm'] ?? '';

        $this->validateUsername($username, $this->userRepository);
        $this->validateEmail($email);
        $this->validatePassword($password);
        $this->validatePasswordConfirm($password, $passwordConfirm);

        if (!empty($this->errorMessages)) {
            throw new ValidationException();
        }
    }

    /**
     * @param string $username
     */
    private function validateUsername(string $username, UserRepository $userRepository): void
    {
        if (empty($username)) {
            $this->errorMessages[self::USERNAME_KEY] = 'Please enter username.';
        } elseif (strlen($username) < self::USERNAME_MIN_LENGTH) {
            $this->errorMessages[self::USERNAME_KEY] = 'Username must contain at least ' . self::USERNAME_MIN_LENGTH . ' characters.';
        } elseif (strlen($username) > self::USERNAME_MAX_LENGTH) {
            $this->errorMessages[self::USERNAME_KEY] = 'Username must not contain more than ' . self::USERNAME_MAX_LENGTH . ' characters.';
        } elseif (!empty($userRepository->findBy(['username' => $username]))) {
            $this->errorMessages[self::USERNAME_KEY] = 'Username is taken.';
        }
    }

    /**
     * @param string $email
     */
    private function validateEmail(string $email): void
    {
        if (!preg_match(self::EMAIL_REGEX, $email)) {
            $this->errorMessages[self::EMAIL_KEY] = 'Please enter a valid email.';
        }
    }

    /**
     * @param string $password
     */
    private function validatePassword(string $password): void
    {
        if (empty($password)) {
            $this->errorMessages[self::PASSWORD_KEY] = 'Please enter password.';
        } elseif (strlen($password) < self::PASSWORD_MIN_LENGTH) {
            $this->errorMessages[self::PASSWORD_KEY] = 'Password must contain at least ' . self::PASSWORD_MIN_LENGTH . ' characters.';
        } elseif (strlen($password) > self::PASSWORD_MAX_LENGTH) {
            $this->errorMessages[self::PASSWORD_KEY] = 'Password must not contain more than ' . self::PASSWORD_MAX_LENGTH . 'characters.';
        } elseif (!preg_match(self::PASSWORD_REGEX, $password)) {
            $this->errorMessages[self::PASSWORD_KEY] = 'Password must contain at least 1 letter and 1 number.';
        }
    }

    /**
     * @param string $password
     * @param string $passwordConfirm
     */
    private function validatePasswordConfirm(string $password, string $passwordConfirm)
    {
        if ($password !== $passwordConfirm && empty($this->errorMessages[self::PASSWORD_KEY])) {
            $this->errorMessages[self::PASSWORD_CONFIRM_KEY] = 'Passwords do not match.';
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
