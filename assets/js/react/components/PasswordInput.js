import React from 'react';

export default class PasswordInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "password",
            iconClassName: "eye-icon",
            hoverText: "Show password"
        }
    }

    onHandleClick() {
        const newType = (this.state.type === "password") ? "text" : "password" ;
        let newClassName = "eye-icon";
        let newHoverText = "Show password";
        if (newType !== "password") {
            newClassName = "eye-icon inverted";
            newHoverText = "Hide password";
        }
        this.setState({
            type: newType,
            iconClassName: newClassName,
            hoverText: newHoverText
        });
    }

    render() {
        return (
            <div className="form-grouping">
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <div>
                    <input type={this.state.type} name={this.props.name} id={this.props.id} className="password-input"/>
                    <img
                        src="./img/eye-icon.png"
                        alt="eye" className={this.state.iconClassName}
                        onClick={() => this.onHandleClick()}
                        title={this.state.hoverText}
                    />
                </div>
            </div>
        );
    }
}