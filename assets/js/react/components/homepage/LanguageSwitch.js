import React, { useState } from 'react';

import {
    ENGLISH,
    SLOVAK,
    LANGUAGE_KEY
} from "./HomepageWrapper";

const LanguageSwitch = ({lang, setGlobalLang}) => {
    const languages = [ENGLISH, SLOVAK];
    const flags = [
        {
            language: ENGLISH,
            flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/joypixels/275/flag-united-kingdom_1f1ec-1f1e7.png'
        },
        {
            language: SLOVAK,
            flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/257/flag-slovakia_1f1f8-1f1f0.png'
        }
    ];
    const [language, setLanguage] = useState(lang);

    const selectLanguage = lng => {
        window.localStorage.setItem(LANGUAGE_KEY, lng);
        setLanguage(lng);
        setGlobalLang(lng);
        location.reload();
    }

    return (
        <div
            style={{
            height: 30,
            width: 280,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid lightgray',
            boxShadow: '0px 0px 3px 3px rgba(180, 230, 250, 0.2)',
            borderRadius: 5,
            backgroundColor: '#fdfefd',
            padding: '3px 0 3px 7px',
            position: 'absolute',
            right: 50,
            top: 80,
            fontFamily: 'Ubuntu'
        }}
        >
            {
                language === ENGLISH ?
                    'Select language: ' :
                    'Vyberte si jazyk: '
            }

            {
                languages.map(l => {
                    const currentStyle = getCurrentLangStyle(l === language);
                    const flagSrc = flags.find(flag => flag.language === l).flag;
                    return(
                        <span
                            style={currentStyle}
                            className='lang-choice'
                            onClick={() => {selectLanguage(l)}}
                        >
                            <img
                                src={flagSrc}
                                alt={l + '-flag'}
                                style={{
                                    height: 25,
                                    width: 30,
                                    marginRight: 3
                                }}
                            />
                            {l}
                        </span>
                    )
                })
            }

        </div>
    );
}

const getCurrentLangStyle = isSelected => {
    const currentStyle = isSelected ?
        {
            fontWeight: 'bolder',
            boxShadow: '0px 0px 3px 1px rgba(100,180,200,0.8)',
            backgroundColor: 'white'
        } :
        {
            opacity: 0.75
        };
    currentStyle.cursor = 'pointer';
    currentStyle.height = '100%';
    currentStyle.padding = 3;
    currentStyle.borderRadius = 3;
    currentStyle.display = 'flex';
    currentStyle.alignItems = 'center';

    return currentStyle;
}

export default LanguageSwitch;