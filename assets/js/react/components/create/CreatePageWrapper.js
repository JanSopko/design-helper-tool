import React from 'react';
import Footer from "../Footer";
import { CreationDesk } from "./CreationDesk";
import { CreateMenu } from "./menu/CreateMenu";

export const CreatePageWrapper = () => {
    return(
        <div id="content">
            <CreateMenu/>
            <CreationDesk/>
            <Footer/>
        </div>
    );
}