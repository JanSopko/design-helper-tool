import React from 'react';
import Footer from "../Footer";
import { ThemeCard } from "../browse/ThemeCard";

export const MyThemesWrapper = () => {
    console.log(layoutData);
    if (layoutData && layoutData.themes && layoutData.themes.length > 0) {
        return (
            <div id="content">
                {
                    layoutData.themes.map(theme => {
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
    } else {
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
    }
}