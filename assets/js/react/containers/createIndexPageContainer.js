import React from 'react';
import Navigation from "../components/Navigation";
import CreateIndexPageWrapper from "../components/create/CreateIndexPageWrapper";

export default function CreateIndexPageContainer() {
    return(
        <div>
            <Navigation/>
            <CreateIndexPageWrapper/>
        </div>
    );
}