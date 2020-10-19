import React from 'react';
import Navigation from "../components/Navigation";
import BrowsePageWrapper from "../components/browse/BrowsePageWrapper";

export default function BrowsePageContainer(props) {
    return(
        <div>
            <Navigation>
            </Navigation>
            <BrowsePageWrapper>
            </BrowsePageWrapper>
        </div>
    );
}