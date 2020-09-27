import React from 'react';
import Navigation from "../components/Navigation";
import SignPageWrapper from "../components/sign/SignPageWrapper";

export default class SignPageContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Navigation>
                </Navigation>
                <SignPageWrapper>
                </SignPageWrapper>
            </div>
        );
    }
}