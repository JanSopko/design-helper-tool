import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import { ThemeCard } from "../browse/ThemeCard";
import axios from "axios";

const ThemesOfWrapper = () => {
    const THEMES_DATA_URL = `/data/themesOf/${layoutData.username}`;
    const [themes, setThemes] = useState([]);
    useEffect(() => {
            axios.get(THEMES_DATA_URL)
                .then(res => setThemes(res.data));
        }, []);

    return(
        <div id="content">
            {
                themes.length > 0 &&
                    themes.map(theme => {
                        return(
                            <ThemeCard
                                themeId={theme.id}
                                name={theme.name}
                                imgPath={theme.imgPath}
                                slashesInUrl={1}
                                author={theme.user_name}
                            />)
                        }
                    )
            }
            <Footer />
        </div>
    );
}

export default ThemesOfWrapper;