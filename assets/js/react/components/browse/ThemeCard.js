import React from 'react';


const redirect = location => {
    window.location.href = location;
}

export const ThemeCard = ({themeId , name, imgPath, author}) => {
    const pathToTheme = '/theme/' + themeId;
    return(
        <div className="theme-card" id={themeId} onClick={() => redirect(pathToTheme)}>
            <h1>{name}</h1>
            <div><small>By <a href={pathToTheme} onClick={themePath2 => redirect(themePath2)}>{author}</a></small></div>
            <hr/>
            <div className="theme-card-img-wrapper">
                <img src={imgPath} alt="theme detail"/>
            </div>
        </div>
    );
}

