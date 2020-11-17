import React, {useState} from 'react';
import InputColor from 'react-input-color';
import { ACTIONS, INIT_STYLE } from "../CreatePageWrapper";

export const NavbarEditor = ({
        navbar,
        dispatch
    }) => {
    const [bgColor, setBgColor] = useState(navbar.backgroundColor || '#ffffff');
    const [textColor, setTextColor] = useState(navbar.color || '#000000');
    const [height, setHeight] = useState(navbar.height || 5);

    console.log('props:',bgColor, textColor, height);
    return(
        <div className="design-menu-editor navbar-editor">
            <div>
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
            <div>
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
            <div>
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

export const FooterEditor = () => {
    return(
        <div className="design-menu-editor">
            <div>
                height:
                <input
                    type="range"
                    min="6"
                    max="20"
                    onChange={e => console.log(e.target.value)}
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