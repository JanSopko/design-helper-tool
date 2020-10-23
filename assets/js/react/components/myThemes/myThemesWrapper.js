import React from 'react';
import Footer from "../Footer";
import { ThemeCard } from "../browse/ThemeCard";

export const MyThemesWrapper = () => {
    return(
        <div id="content">
            {layoutData.themes.map(theme => {
                return(
                    <ThemeCard
                        key={theme.id}
                        themeId={theme.id}
                        author={theme.user_name}
                        name={theme.name}
                        imgPath={theme.img_path}
                    />
                );
            })}
            <Footer/>
        </div>
    );
}