import React from 'react';
import elementOrParentHasClass from "../../../functions/elementOrParentHasClass";

const redirect = location => {
    window.location.href = location;
}

export const ThemeCard = ({themeId , name, imgPath, author, slashesInUrl = 0}) => {
    const ANCHOR_CLASS = 'author-link';
    const pathToTheme = '/theme/' + themeId;
    if (!imgPath || imgPath === '') {
        imgPath = './img/no-preview.png';
        if (slashesInUrl > 0) {
            for (let i = 0; i < slashesInUrl; i++) {
                imgPath = `.${imgPath}`;
            }
        }
    }
    return(
        <div className="theme-card" id={themeId} onClick={e => {
            e.preventDefault();
            if (!elementOrParentHasClass(e.target, ANCHOR_CLASS)) {
                redirect(pathToTheme);
            }
        }}>
            <h1>{name}</h1>
            <div><small>By <a href={`/themesOf/${author}`} onClick={e => {
                e.preventDefault();
                redirect(`/themesOf/${author}`);
            }}
            className={ANCHOR_CLASS}
            >{author}</a></small></div>
            <hr/>
            <div className="theme-card-img-wrapper">
                <img src={imgPath} alt="theme detail"/>
            </div>
        </div>
    );
}

