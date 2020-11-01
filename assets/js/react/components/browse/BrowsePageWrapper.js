import React, { useState ,useEffect } from 'react';
import Footer from "../Footer";
import axios from 'axios';
import { ThemeCard } from "./ThemeCard";


export default function browsePageWrapper() {
    const THEMES_DATA_URL = '/data/themes';

    const [themes, setThemes] = useState([]);

    useEffect(() => {
            axios.get(THEMES_DATA_URL)
                .then(res => {
                    setThemes(res.data);
                })
        }, []);

    return(
        <div id="content">
            {
                themes.map(theme => {
                return(
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
            <Footer>
            </Footer>
        </div>
    );
}