import React from 'react';
import PasswordInput from "../PasswordInput";
import axios from 'axios';

const LABEL_TEXT_USERNAME = 'Username';

const sendLoginRequest = e => {
    e.preventDefault();

    const username = window.document.getElementById('username-input').value;
    const password = window.document.getElementById('password-input').value;
    axios.post('/login', {
        "username": username,
        "password": password
    }).then(res => {
        processLogin(res.data);
    });
}

const processLogin = data => {
    if (data.credentials !== undefined) {
        showWarnings(data.credentials)
    } else {
        redirectToIndex();
    }
}

const showWarnings = warning => {
    const passwordLabel = window.document.getElementById('password-label');
    passwordLabel.classList.add('warning');
    passwordLabel.innerHTML = warning;
}

const redirectToIndex = () => {
    window.location.replace('/');
}

export default function LoginForm() {
    return (
        <div className="form-div">
            <form action={layoutData.loginPath} id="sign-form" method="post">
                <div className="form-grouping">
                    <label htmlFor="username-input" id="username-label">{LABEL_TEXT_USERNAME}</label>
                    <input type="text" name="username" id="username-input"/>
                </div>
                <PasswordInput id="password-input" name="password" labelText="Password" labelId="password-label">
                </PasswordInput>
                <div className="form-grouping">
                    <input type="submit" value="Login" className="button-green" onClick={sendLoginRequest}/>
                </div>
            </form>
        </div>
    );
}