import React from 'react';
import Navbar from "../components/Navbar";

export default class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div>
                <Navbar navItems={navItems}>

                </Navbar>
            </div>
        );
    }
}