import React, { useState, useEffect } from 'react';
import InputColor from 'react-input-color';
import NavbarItemsManager from "./NavbarItemsManager";
import { ACTIONS, INIT_STYLE } from "../CreatePageWrapper";
import elementOrParentHasClass from "../../../../functions/elementOrParentHasClass";

const availableFonts = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Helvetica, sans-serif',
    'Tahoma, sans-serif'
];

export const NavbarEditor = ({
        navbar,
        dispatch
    }) => {
    const [bgColor, setBgColor] = useState(navbar.backgroundColor || '#ffffff');
    const [textColor, setTextColor] = useState(navbar.color || '#000000');
    const [height, setHeight] = useState(navbar.height || 5);
    const [navbarItemsManagerActive, setNavbarItemsManagerActive] = useState(true);

    const closeNavItemsModal = e => {
        const element = e.target;
        if (elementOrParentHasClass(element, 'exit-button')
            || (!elementOrParentHasClass(element, 'floating-window')
                && !elementOrParentHasClass(element, 'manage-nav-items'))
                && !elementOrParentHasClass(element, 'delete-button')
                && !elementOrParentHasClass(element, 'add-button')) {
            setNavbarItemsManagerActive(false);
        }
    }

    window.onclick = closeNavItemsModal;

    return(
        <div className="design-menu-editor navbar-editor">
            {
                navbarItemsManagerActive &&
                <NavbarItemsManager
                    initActive={navbarItemsManagerActive}
                    items={navbar.items}
                    dispatch={dispatch}
                />
            }
            <div className="element-editor-item">
                background color:
                <InputColor
                    initialValue={navbar.backgroundColor || '#ffffff'}
                    onChange={e =>
                    {
                        setBgColor;
                        dispatch({
                            type: ACTIONS.NAVBAR_BACKGROUND_COLOR,
                            payload: {
                                backgroundColor: e.hex
                            }
                        });
                    }
                    }
                    placement="right"
                />
            </div>
            <div className="element-editor-item">
                text color:
                <InputColor
                    initialValue={navbar.color || '#000000'}
                    onChange={e =>
                        {
                            setTextColor;
                            dispatch({
                                type: ACTIONS.NAVBAR_TEXT_COLOR,
                                payload: {
                                    color: e.hex
                                }
                            });
                        }
                    }
                    placement="right"
                />
            </div>
            <div className="element-editor-item">
                height:
                <input
                    type="range"
                    min="3"
                    max="10"
                    value={height}
                    onChange={e =>
                        {
                            dispatch({
                                type: ACTIONS.NAVBAR_HEIGHT,
                                payload: {
                                    height: `${e.target.value}`
                                }
                            });
                            setHeight(e.target.value);
                        }
                    }
                />
            </div>
            <div className="element-editor-item">
                font size:
                <input
                    type="range"
                    min="16"
                    max="40"
                    value={navbar.fontSize}
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.NAVBAR_TEXT_SIZE,
                            payload: {
                                fontSize: Number.parseInt(e.target.value)
                            }
                        });

                    }}
                />
            </div>
            <div className="element-editor-item">
                <label htmlFor="spacing-select">Spacing</label>
                <select
                    name="spacingOption"
                    id="spacing-select"
                    value={navbar.spacingOption}
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.NAVBAR_SPACING_OPTION,
                            payload: {
                                spacingOption: Number.parseInt(e.target.value)
                            }
                        });
                    }}
                >
                    <option value="1">flex-start</option>
                    <option value="2">flex-end</option>
                    <option value="3">space-around</option>
                </select>
            </div>
            <div
                className="element-editor-item hoverable manage-nav-items"
                style={{color:'#cddc39'}}
                onClick={() => setNavbarItemsManagerActive(true)}
            >
                Manage navbar items
            </div>
        </div>
    );
}

export const BodyEditor = ({
        body,
        dispatch
    }) => {
    const [backgroundColor, setBackgroundColor] = useState(body.backgroundColor || '#ffffff');
    const [color, setColor] = useState(body.color || '#000000');

    return (
        <div className="design-menu-editor">
            <div className="element-editor-item">
            background color:
                <InputColor
                    initialValue={body.backgroundColor || '#ffffff'}
                    onChange={e => {
                        setBackgroundColor;
                        dispatch({
                            type: ACTIONS.BODY_BACKGROUND_COLOR,
                            payload: {
                                backgroundColor: e.hex
                            }
                        });
                    }}
                />
            </div>
            <div className="element-editor-item">
                text color:
                <InputColor
                    initialValue={body.color || '#000000'}
                    onChange={e => {
                        setBackgroundColor;
                        dispatch({
                            type: ACTIONS.BODY_TEXT_COLOR,
                            payload: {
                                color: e.hex
                            }
                        });
                    }}
                />
            </div>
            <div className="element-editor-item">
                font size:
                <input
                    type="range"
                    min={12}
                    max={24}
                    value={body.fontSize}
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.BODY_FONT_SIZE,
                            payload: {
                                fontSize: Number.parseInt(e.target.value)
                            }
                        });
                    }}
                />
            </div>
            <div
                className="element-editor-item"
                style={{display:'flex',flexFlow:'column wrap'}}
            >
                padding:
                <input
                    type="range"
                    min="20"
                    max="40"
                    value={body.content.padding}
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.BODY_PADDING,
                            payload: {
                                padding: Number.parseInt(e.target.value)
                            }
                        });
                    }}
                />
            </div>
        </div>
    );
}

export const SidebarEditor = () => {
    return(
        <div className="design-menu-editor">
            SIDEBAR EDITOR PLACEHOLDER
        </div>
    );
}

export const FooterEditor = ({footer, dispatch}) => {

    const [backgroundColor, setBackgroundColor] = useState(footer.backgroundColor || '#ffffff');
    const [textColor, setTextColor] = useState(footer.color || '#000000');

    return(
        <div className="design-menu-editor">
            <div className="element-editor-item">
                background color:
                <InputColor
                    initialValue={footer.backgroundColor || '#ffffff'}
                    onChange={e => {
                        setBackgroundColor;
                        dispatch({
                            type: ACTIONS.FOOTER_BACKGROUND_COLOR,
                            payload: {
                                backgroundColor: e.hex
                            }
                        });
                    }}
                    placement="right"
                />
            </div>
            <div className="element-editor-item">
                text color:
                <InputColor
                    initialValue={footer.color || '#000000'}
                    onChange={e => {
                        setTextColor;
                        dispatch({
                            type: ACTIONS.FOOTER_TEXT_COLOR,
                            payload: {
                                color: e.hex
                            }
                        });
                    }}
                />
            </div>
            <div className="element-editor-item">
                height:
                <input
                    type="range"
                    min="5"
                    max="15"
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.FOOTER_HEIGHT,
                            payload: {
                                height: Number.parseInt(e.target.value)
                            }
                        });
                    }}
                />
            </div>
            <div className="element-editor-item">
                font size:
                <input
                    type="range"
                    min="12"
                    max="24"
                    value={footer.fontSize || 14}
                    onChange={e => {
                        dispatch({
                            type: ACTIONS.FOOTER_FONT_SIZE,
                            payload: {
                                fontSize: Number.parseInt(e.target.value)
                            }
                        });
                    }}
                />
            </div>
        </div>
    );
}

export const SectionsEditor = () => {
    return(
        <div className="design-menu-editor">
            SECTIONS EDITOR PLACEHOLDER
        </div>
    );
}