import React, { useState } from 'react';
import Footer from "../Footer";
import EnglishContent from "./EnglishContent";
import SlovakContent from "./SlovakContent";
import LanguageSwitch from "./LanguageSwitch";
import { CustomAlert } from "../CustomAlert";

export const ENGLISH = 'EN';
export const SLOVAK = 'SK';
export const LANGUAGE_KEY = 'lang';

export default function HomepageWrapper() {
    let languageChoice = window.localStorage.getItem(LANGUAGE_KEY) || ENGLISH;
    const [currentLanguage, setCurrentLanguage] = useState(languageChoice);

    return (
        <div id="content">
            <LanguageSwitch lang={currentLanguage} setGlobalLang={setCurrentLanguage}/>
            {
                currentLanguage === ENGLISH ?
                    <EnglishContent /> : <SlovakContent />
            }

                <div style={{
                    backgroundColor:'rgba(255,255,255,1)',
                    display:'flex',
                    justifyContent:'center',
                    marginTop: 100,
                    boxShadow: '0px 0px 3px 3px rgba(180, 230, 250, 0.2)',
                    border: '1px solid lightgray',
                }}>
                <video
                    width="95%"
                    height="90%"
                    autoPlay
                    loop
                    muted
                    id="showcase-video"
                >
                    <source src="../img/video1.mov" type="video/mp4" />
                </video>
                </div>

            <Footer>
            </Footer>
        </div>
    );
}