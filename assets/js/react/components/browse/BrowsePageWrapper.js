import React, { useState ,useEffect } from 'react';
import Footer from "../Footer";
import Pager from "../Pager";
import Loader from "../Loader";
import axios from 'axios';
import { ThemeCard } from "./ThemeCard";


export default function browsePageWrapper() {
    const THEMES_DATA_URL = `/data/themes?page=${layoutData.page}`;
    const PAGES_COUNT_URL = `/data/pages_count`;

    const LOCALSTORAGE_THEMES_KEY = `loadedThemes-${layoutData.page}`;
    const LOCALSTORAGE_PAGES_COUNT_KEY = 'loadedPagesCount';
    const LOCALSTORAGE_TTL_KEY = 'TTL';
    const LOCALSTORAGE_TTL = 300000;

    const [themes, setThemes] = useState([]);
    const [pagesCount, setPagesCount] = useState(0);
    const [loadingDone, setLoadingDone] = useState(false);

    const myStorage = window.localStorage;
    let ttl = myStorage.getItem(LOCALSTORAGE_TTL_KEY);

    const redirectToPage = (pg) => {
        window.location.href = `/browse?page=${pg}`;
    }

    useEffect(() => {
        // myStorage.clear();
            if (
                myStorage.getItem(LOCALSTORAGE_THEMES_KEY) === null ||
                myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY) === null
                || ( (ttl !== null) && ttl < new Date().getTime())
            ) {
                axios.get(THEMES_DATA_URL)
                    .then(res => {
                        setThemes(res.data);
                        myStorage.setItem(LOCALSTORAGE_THEMES_KEY, JSON.stringify(res.data));
                    })
                    .then(() => {
                        axios.get(PAGES_COUNT_URL)
                            .then(res => {
                                if (res.data && res.data.pagesCount) {
                                    setPagesCount(res.data.pagesCount);
                                    myStorage.setItem(LOCALSTORAGE_PAGES_COUNT_KEY, res.data.pagesCount);
                                }
                            });
                    }).then(() => {
                        let newTTL = new Date().getTime() + LOCALSTORAGE_TTL;
                        myStorage.setItem(LOCALSTORAGE_TTL_KEY, newTTL);
                    })
                    .then(() => setLoadingDone(true));
            } else {
                setThemes(JSON.parse(myStorage.getItem(LOCALSTORAGE_THEMES_KEY)));
                setPagesCount(myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY));
                setLoadingDone(true);
            }
        }, []);

    if ((myStorage.getItem(LOCALSTORAGE_THEMES_KEY) === null || myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY) === null)
        && (themes.length === 0 || pagesCount === 0)
        && ttl < new Date().getTime()
        && !loadingDone) {

        return(
            <div id="content">
                <Loader />
                <Footer />
            </div>
        );
    } else {
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
                {
                    (themes.length <= 0 && loadingDone) &&
                        <h1>This page is empty</h1>
                }
                <Pager
                    page={layoutData.page}
                    numOfPages={pagesCount}
                    onPageClick={redirectToPage}
                />
                <Footer />
            </div>
        );
    }
}