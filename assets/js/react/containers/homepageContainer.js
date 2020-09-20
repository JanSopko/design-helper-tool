import React from 'react';
import Navbar from "../components/Navbar";
import HomepageWrapper from "../components/homepage/HomepageWrapper";
import Footer from "../components/Footer";

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Navbar navItems={navItems}>
                </Navbar>
                <HomepageWrapper>
                </HomepageWrapper>
            </div>
        );
    }
}