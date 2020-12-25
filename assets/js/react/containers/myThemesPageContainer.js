import React from 'react';
import Navigation from "../components/Navigation";
import { MyThemesWrapper } from "../components/myThemes/myThemesWrapper";

export const MyThemesContainer = () => {
    return(
        <div>
           <Navigation/>
           <MyThemesWrapper/>
        </div>
    );
}