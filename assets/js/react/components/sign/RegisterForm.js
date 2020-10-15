import React from 'react';
import PasswordInput from "../PasswordInput";
import axios from 'axios';

const LABEL_TEXT_USERNAME = 'Username';
const LABEL_TEXT_EMAIL = 'Email';
const LABEL_TEXT_PASSWORD = 'Password';
const LABEL_TEXT_PASSWORD_CONFIRM = 'Confirm password';

const sendRegisterRequest = e => {
    e.preventDefault();
    const username = window.document.getElementById('username-input').value;
    const email = window.document.getElementById('email-input').value;
    const password = window.document.getElementById('password-input').value;
    const passwordConfirm = window.document.getElementById('password-confirm-input').value;

    axios.post('/register',
        {
            "username": username,
            "email": email,
            "password": password,
            "password-confirm": passwordConfirm
        }).then(res => {
            showWarnings(res.data);
            if (res.data.success !== undefined && res.data.success) {
                //@todo redirect na login endpoint s rovnakymi datami
                //@todo redirect na pozadovanu page, pravdepodobne homepage
                alert('Registration complete! You can now login.');
                window.location.replace('/');
            }
        });
}

const showWarnings = data => {
    let usernameLabel = window.document.getElementById('username-label');
    let passwordLabel = window.document.getElementById('password-label');
    let passwordConfirmLabel = window.document.getElementById('password-confirm-label');
    let emailLabel = window.document.getElementById('email-label');

    if (data.username !== undefined) {
        usernameLabel.classList.add('warning');
        usernameLabel.innerHTML = data.username;
    } else {
        usernameLabel.classList.remove('warning');
        usernameLabel.innerHTML = LABEL_TEXT_USERNAME;
    }

    if (data.password !== undefined) {
        passwordLabel.classList.add('warning');
        passwordLabel.innerHTML = data.password;
    } else {
        passwordLabel.classList.remove('warning');
        window.document.getElementById('password-label').innerHTML = LABEL_TEXT_PASSWORD;
    }

    if (data.passwordConfirm !== undefined) {
        passwordConfirmLabel.classList.add('warning');
        passwordConfirmLabel.innerHTML = data.passwordConfirm;
    } else {
        passwordConfirmLabel.classList.remove('warning');
        passwordConfirmLabel.innerHTML = LABEL_TEXT_PASSWORD_CONFIRM;
    }

    if (data.email !== undefined) {
        emailLabel.classList.add('warning');
        emailLabel.innerHTML = data.email;
    } else {
        emailLabel.classList.remove('warning');
        emailLabel.innerHTML = LABEL_TEXT_EMAIL;
    }
}

export default function RegisterForm() {
    return (
        <div className="form-div">
            <form action={layoutData.registerPath} id="sign-form" method="post">
                <div className="form-grouping">
                    <label htmlFor="username-input" id="username-label">Username</label>
                    <input type="text" name="username" id="username-input"/>
                </div>
                <div className="form-grouping">
                    <label htmlFor="email-input" id="email-label">E-mail</label>
                    <input type="email" name="email" id="email-input"/>
                </div>
                <PasswordInput id="password-input" name="password" labelText="Password" labelId="password-label">
                </PasswordInput>
                <PasswordInput id="password-confirm-input" name="password-confirm" labelId="password-confirm-label" labelText="Confirm password">
                </PasswordInput>
                <div className="form-grouping">
                    <input type="submit" value="Register" className="button-green" onClick={sendRegisterRequest}/>
                </div>
            </form>
        </div>
    );
}