import React from 'react';
import PasswordInput from "../PasswordInput";

export default function LoginForm() {
    return (
        <div className="form-div">
            <form action="/" id="sign-form">
                <div className="form-grouping">
                    <label htmlFor="username-input">Username</label>
                    <input type="text" name="username" id="username-input"/>
                </div>
                <PasswordInput id="password-input" name="password" labelText="Password">
                </PasswordInput>
                <div className="form-grouping">
                    <input type="submit" value="Login" className="button-green"/>
                </div>
            </form>
        </div>
    );
}