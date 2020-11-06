import React, { useState, useEffect} from 'react';
import Footer from "../Footer";
import PagesTable from "./PagesTable";
import axios from 'axios';

const ThemeWrapper = () => {
    const [pages, setPages] = useState([]);

    const addPage = () => {
        axios.post('/create/page', {
            themeId: layoutData.themeId
        }).then(() => showPages());
    }

    const showPages = () => {
        let newPages = [];
        axios.get(`/data/theme/${layoutData.themeId}/pages`).then(res => {
            if (res.data.length > 0) {
                newPages = res.data.map(page => {
                    return page;
                });
            }
            setPages(newPages);
        });
    }

    const deleteTheme = themeId => {
        axios.delete(`/delete/theme/${themeId}`).then(res => {
            if (res.data.success) {
                //todo setTimeout, loader kruzok + redirect
                alert('Theme deleted');
                window.location.replace('/my_themes');
            } else if (res.data.message) {
                alert(res.data.message);
            }
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
                        <button
                            className="button-green"
                        >
                            Edit
                        </button>
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
                    {
                        layoutData.isMyTheme &&
                        <button
                            className="button-red"
                            onClick={() => {
                                    if (confirm('Are you sure you want to delete this Theme?')) {
                                        deleteTheme(layoutData.themeId);
                                    }
                                }
                            }
                        >
                            Delete Theme
                        </button>
                    }
                </div>
                <p>{layoutData.themeDescription}</p>
                <div>
                {
                    pages.length > 0 &&
                        <div>
                            <h2>List of pages:</h2>
                            <PagesTable pages={pages} isMyTheme={layoutData.isMyTheme}/>
                        </div>
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