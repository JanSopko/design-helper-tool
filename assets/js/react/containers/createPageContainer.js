import React from 'react';
import Navigation from "../components/Navigation";
import CreatePageWrapper from "../components/create/CreatePageWrapper";

export default class CreatePageContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Navigation>
                </Navigation>
                <CreatePageWrapper>
                </CreatePageWrapper>
            </div>
        );
    }
}