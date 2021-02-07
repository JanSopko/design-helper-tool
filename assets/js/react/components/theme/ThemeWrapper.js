import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import PagesTable from "./PagesTable";
import FloatingWindow from "../FloatingWindow";
import elementOrParentHasClass from "../../../functions/elementOrParentHasClass";
import axios from 'axios';

const ThemeWrapper = () => {
    const [pages, setPages] = useState([]);
    const [editModalActive, setEditModalActive] = useState(false);
    const [name, setName] = useState(layoutData.themeName);
    const [privacyLevel, setPrivacyLevel] = useState(layoutData.privacyLevel);
    const [description, setDescription] = useState(layoutData.themeDescription);
    const [allowedPrivacyLevels, setAllowedPrivacyLevels] = useState([]);

    useEffect(() => {
        axios.get('/data/allowed_privacy_levels').then(res => {
            if (res.data && res.data.length > 0) {
                setAllowedPrivacyLevels(res.data);
            }

        });
    }, []);

    const addPage = () => {
        const pageName = prompt('Enter name of the new page');
        axios.post('/create/page', {
            themeId: layoutData.themeId,
            name: pageName
        }).then(res => {
            if (res.data.name) {
                alert(res.data.name);
            } else {
                showPages();
            }
        });
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

    const closeEditModal = e => {
        const element = e.target;
        if (elementOrParentHasClass(element, 'exit-button')
            || (!elementOrParentHasClass(element, 'floating-window')
                && !elementOrParentHasClass(element, 'edit-button'))) {
            setEditModalActive(false);
        }
    }

    const updateTheme = themeId => {
        axios.post(`/data/update_theme/${themeId}`, {
            name: name,
            privacyLevel: privacyLevel,
            description: description
        }).then(res => {
            if (res.data && res.data.success) {
                location.reload();
            } else if (res.data && res.data.errors) {
                let errorString = '';
                Object.keys(res.data.errors).forEach(key => {
                    errorString += res.data.errors[key] + "\n";
                });
                alert(errorString);
            }
        });
    }

    return(
        <div
            id="content"
            onClick={e => closeEditModal(e)}
        >
            {
                (layoutData.isMyTheme && editModalActive) &&
                <FloatingWindow
                    initActive={editModalActive}
                    initContents={[
                        <div>
                            <label htmlFor="input-name">Theme name</label>
                            <input
                                type="text"
                                id="input-name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                style={{width:'100%',marginBottom:'.5rem'}}
                            />
                        </div>,
                        <div>
                            <label htmlFor="select-privacy-level">Privacy level</label>
                            <select
                                name="privacyLevel"
                                id="privacy-level-select"
                                onChange={e => setPrivacyLevel(e.target.value)}
                                style={{width:'100%',marginBottom:'.5rem'}}
                                value={privacyLevel}
                            >
                                {
                                    allowedPrivacyLevels.map(item => {
                                        return(
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.description}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>,
                        <div>
                            <label htmlFor="textarea-description">Description</label>
                            <textarea
                                name="description"
                                id="textarea-description"
                                cols="20"
                                rows="10"
                                onChange={e => setDescription(e.target.value)}
                                style={{width:'100%',resize:'none'}}
                                value={description}
                            />
                        </div>,
                        <div>
                            <button
                                className="button-green"
                                onClick={() => updateTheme(layoutData.themeId)}
                                style={{width:'100%'}}
                            >
                                Edit
                            </button>
                        </div>
                    ]}
                />

            }
            <section>
                <h1>{layoutData.themeName}</h1>
                <small>By <a
                    href={`themesOf/${layoutData.themeAuthor}`}
                    onClick={() => window.location = `/themesOf/${layoutData.themeAuthor}`}
                >
                    {layoutData.themeAuthor}</a></small>
                <div id="option-buttons-wrapper">
                    {
                        layoutData.isMyTheme &&
                        <button
                            className="button-green edit-button"
                            onClick={() => {
                                setEditModalActive(true);
                            }}
                        >
                            Edit
                        </button>
                    }
                    {
                        layoutData.isMyTheme &&
                        <button
                            className="button-green"
                            onClick={() => addPage()}
                        >
                            Add page
                        </button>
                    }
                    <button
                        className="button-green"
                        onClick={() => {window.location.href = `/download-theme/${Number.parseInt(layoutData.themeId)}`}}
                    >
                        Download
                    </button>
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
                <div>
                    <p>
                        {layoutData.themeDescription}
                    </p>
                </div>
                <div style={{marginTop:'6rem'}}>
                {
                    pages.length > 0 &&
                        <div>
                            <h2>List of pages:</h2>
                            <PagesTable pages={pages} isMyTheme={layoutData.isMyTheme}/>
                        </div>
                }
                {
                    // (pages.length === 0) && layoutData.isMyTheme &&
                    //     <section>
                    //         <h3>This Theme is empty, let's add some pages!</h3>
                    //     </section>
                }
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default ThemeWrapper;