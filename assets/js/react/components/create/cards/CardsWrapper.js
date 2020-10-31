import React, { useState, useEffect } from 'react';
import Axios from "axios";
import CreateNewThemeCard from "./CreateNewThemeCard";
import ContinueOnExistingThemesCard from "./ContinueOnExistingThemesCard";


const CardsWrapper = () => {
    const [hasThemes, setHasThemes] = useState(false);
    useEffect(() => {

    }, []);
    return(
        <div id="cards-wrapper">
            <CreateNewThemeCard/>
            <ContinueOnExistingThemesCard/>
        </div>
    );
}

export default CardsWrapper;