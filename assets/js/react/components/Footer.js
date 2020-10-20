import React from 'react';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const githubLink = "https://github.com/JanSopko/design-helper-tool";
        return (
            <div id="footer">
                <ul>
                    <li key="1" className="clickable" onClick={() => window.open(githubLink)}>
                        GitHub
                    </li>
                </ul>
                <small>Ján Sopko, Matúš Čižmár ©2020</small>
            </div>
        );
    }
}