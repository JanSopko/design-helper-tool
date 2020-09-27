import React from 'react';
import SignFormOption from "./SignFormOption";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default class FormWrapper extends React.Component {
    constructor() {
        super();
        this.options = [
            "LoginForm",
            "RegisterForm"
        ];
        this.state = {
            currentOption: this.options[0]
        }
    }

    onChangeForm(option) {
        if (option !== this.state.currentOption) {
            this.setState({
                currentOption: option
            });
        }
    }

    render() {
        const forms = {
            LoginForm: LoginForm,
            RegisterForm: RegisterForm
        };
        const CurrentForm = React.createElement(forms[this.state.currentOption]);
        return (
            <div id="form-wrapper">
                <div className="options-bar">
                    <SignFormOption
                        text="Sign in"
                        selected={this.state.currentOption === this.options[0]}
                        option={0}
                        onClick={() => {this.onChangeForm(this.options[0])}}
                    >
                    </SignFormOption>
                    <SignFormOption
                        text="Register"
                        selected={this.state.currentOption === this.options[1]}
                        option={1}
                        onClick={() => {this.onChangeForm(this.options[1])}}
                    >
                    </SignFormOption>
                </div>
                <div className="form-container">
                    {CurrentForm}
                </div>
            </div>
        );
    }
}