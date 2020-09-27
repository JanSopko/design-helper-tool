import React from 'react';

export default function SignFormOption(props) {
    let className = 'form-option';
    className += (props.option === 0) ? ' option-left' : ' option-right';
    if (props.selected) className += ' selected-option';

    return (
        <span className={className} onClick={props.onClick}>
            {props.text}
        </span>
    );
}