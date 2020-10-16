import React from 'react';
import axios from 'axios';

export default class LogoutLink extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogout(e) {
        e.preventDefault();
        if (confirm("Are you sure you want to logout?")) {
            axios.post(this.props.path, {}).then(res => {
                if (res.data.success !== undefined && res.data.success) {
                    window.location.href = '/';
                }
            });
        }
    }

    render() {
        return (
            <a href={this.props.path} onClick={e => this.onLogout(e)}>{this.props.text}</a>
        );
    }
}