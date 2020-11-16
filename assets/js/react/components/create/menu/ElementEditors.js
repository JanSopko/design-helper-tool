import React, {useState} from 'react';
import InputColor from 'react-input-color';

export const NavbarEditor = ({currentBgColor = '#000000', currentTextColor = '#ffffff'}) => {
    const [bgColor, setBgColor] = useState(currentBgColor);
    const [textColor, setTextColor] = useState(currentTextColor);

    return(
        <div className="design-menu-editor navbar-editor">
            <div>
                background color:
                <InputColor
                    initialValue="#000000"
                    onChange={setBgColor}
                    placement="right"
                />
            </div>
            <div>
                text color:
                <InputColor
                    initialValue="#ffffff"
                    onChange={setTextColor}
                    placement="right"
                />
            </div>
            <div>
                height
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
            FOOTER EDITOR PLACEHOLDER
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