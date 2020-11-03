import React, { useState, useEffect} from 'react';
import Footer from "../Footer";
import PagesTable from "./PagesTable";
import axios from 'axios';

const ThemeWrapper = () => {
    const [pages, setPages] = useState([]);

    const addPage = () => {
        axios.post('/create/page', {
            themeId: layoutData.themeId
        });
        showPages();
    }

    const showPages = () => {
        let newPages = [];
        axios.get(`/data/theme/${layoutData.themeId}/pages`).then(res => {
            if (res.data.length > 0) {
                newPages = res.data.map(page => {
                    return page.id;
                });
            }
            setPages(newPages);
        });
    }

    const getNewPages = () => {
        let newPages = [];
        axios.get(`/data/theme/${layoutData.themeId}/pages`).then(res => {
            if (res.data.length > 0) {
                newPages = res.data.map(page => {
                    return page.id;
                });
            }
            return newPages;
        });
    }

    useEffect(() => {
        showPages();
    }, []);

    return(
        <div id="content">
            <section>
                <h1>{layoutData.themeName}</h1>
                <small>By <a href="#">{layoutData.themeAuthor}</a></small>
                <div id="option-buttons-wrapper">
                    {
                        layoutData.isMyTheme &&
                        <button className="button-green">Edit</button>
                    }
                    {
                        layoutData.isMyTheme &&
                        <button
                            className="button-yellow"
                            onClick={() => addPage()}
                        >
                            Add page
                        </button>
                    }
                    <button className="button-blue">Download</button>
                </div>
                <p>{layoutData.themeDescription}</p>
                <div>
                {
                    pages.length > 0 &&
                        <PagesTable pages={pages} />
                }
                {
                    (pages.length === 0) && layoutData.isMyTheme &&
                        <section>
                            <h3>This Theme is empty, let's add some pages!</h3>
                        </section>
                }
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default ThemeWrapper;