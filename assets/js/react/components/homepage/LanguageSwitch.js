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
            width: 'auto',
            display: 'inline-block',
            border: '1px solid gray',
            borderRadius: 5,
            backgroundColor: '#fdfefd',
            padding: 3,
            position: 'absolute',
            right: 50,
            top: 80
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
                                    marginBottom: -5,
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
            fontWeight: 'bold',
            boxShadow: '0px 0px 3px 1px rgba(200,230,250,0.8)',
            backgroundColor: 'white'
        } :
        {
            opacity: 0.75
        };
    currentStyle.margin = '0 15px';
    currentStyle.cursor = 'pointer';
    currentStyle.height = '100%';
    currentStyle.padding = 3;
    currentStyle.borderRadius = 3;

    return currentStyle;
}

export default LanguageSwitch;