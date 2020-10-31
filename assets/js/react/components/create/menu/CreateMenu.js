import React from 'react';
import {
    OptionNavbar,
    OptionFooter,
    OptionSideBar,
    OptionSection,
    OptionTable
} from "./MenuOptions";

export const CreateMenu = () => {
    return(
        <div id="create-menu">
            <OptionNavbar/>
            <OptionFooter/>
            <OptionSideBar/>
            <OptionSection/>
            <OptionTable/>
        </div>
    );
}