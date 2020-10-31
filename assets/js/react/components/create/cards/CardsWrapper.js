import React from 'react';
import CreateNewThemeCard from "./CreateNewThemeCard";
import ContinueOnExistingThemesCard from "./ContinueOnExistingThemesCard";


const CardsWrapper = () => {
    return(
        <div id="cards-wrapper">
            <CreateNewThemeCard/>
            <ContinueOnExistingThemesCard/>
        </div>
    );
}

export default CardsWrapper;