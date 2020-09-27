import React from 'react';
import PasswordInput from "../PasswordInput";

export default function RegisterForm() {
    return (
        <div className="form-div">
            <form action="/" id="sign-form">
                <div className="form-grouping">
                    <label htmlFor="username-input">Username</label>
                    <input type="text" name="username" id="username-input"/>
                </div>
                <div className="form-grouping">
                    <label htmlFor="email-input">E-mail</label>
                    <input type="email" name="email" id="email-input"/>
                </div>
                <PasswordInput id="password-input" name="password" labelText="Password">
                </PasswordInput>
                <PasswordInput id="password-confirm-input" name="password-confirm" labelText="Confirm password">
                </PasswordInput>
                <div className="form-grouping">
                    <input type="submit" value="Register" className="button-green"/>
                </div>
            </form>
        </div>
    );
}