import React from 'react';
import HomepageWrapper from "../components/homepage/HomepageWrapper";
import Navigation from "../components/Navigation";

export default class HomepageContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Navigation>
                </Navigation>
                <HomepageWrapper>
                </HomepageWrapper>
            </div>
        );
    }
}