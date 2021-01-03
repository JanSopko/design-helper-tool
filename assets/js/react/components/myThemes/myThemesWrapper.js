import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import axios from 'axios';
import { ThemeCard } from "../browse/ThemeCard";

export const MyThemesWrapper = () => {
    const [themes, setThemes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const MY_THEMES_DATA_URL = '/data/my_all_themes';

    useEffect(() => {
        if (layoutData && layoutData.themes) {
            setThemes(layoutData.themes);
            setLoaded(true);
        } else {
            axios.get(MY_THEMES_DATA_URL)
                .then(res => {
                    if (res.data) {
                        setThemes(res.data)
                    }
                })
                .then(() => {
                    setLoaded(true);
                });
        }
    }, []);

    if (themes && themes.length > 0) {
        return (
            <div id="content">
                {
                    themes.map(theme => {
                        return (
                            <ThemeCard
                                key={theme.id}
                                themeId={theme.id}
                                author={theme.user_name}
                                name={theme.name}
                                imgPath={theme.img_path}
                            />
                        );
                    })
                }
                <Footer/>
            </div>
        );
    }  else if (loaded) {
        return(
            <div id="content" className="no-themes">
                <h2>You haven't created any Themes yet... </h2> <br/>
                <h1>
                    <a
                        className="create-theme-link"
                        href="/create-theme"
                        onClick={() => window.location.href = '/create-theme'}
                    >
                        Create a new Theme!</a>
                </h1>
                <Footer/>
            </div>
        );
    } else {
        return(
            <div id="content">

                <Footer/>
            </div>
        );
    }
}