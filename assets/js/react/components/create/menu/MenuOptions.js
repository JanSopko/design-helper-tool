import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputColor from "react-input-color";
import {elementOrParentHasClass} from "../../../../functions/elementOrParentHasClass";

export const OptionNavbar = () => {
    const [active, setActive] = useState(false);
    const [color, setColor] = useState('white');
    const [height, setHeight] = useState(100);
    const classname = active ? "navbar-ui-menu" : "navbar-ui-menu invis";
    return(
        <div className="menu-option"
             onClick=
                 {e => {
                     if(!elementOrParentHasClass(e.target, "navbar-ui-menu"))
                      setActive(!active)
                    }
                 }>
            Navbar
            <div className={classname}>
                <InputColor initialValue="#ffffff" onChange={(color, height) => {setColor;showNavbar(color, height);}}/>
                <input type="number" value={height} onChange={(event, color) => {setHeight(event.target.value);showNavbar(color, event.target.value);}}/>
            </div>
        </div>
    );
}

function showNavbar(color, height) {
    console.log(height);
    if (height < 50) {
        height = 50;
    }
    if (height > 200) {
        height = 200;
    }
    const navStyle = {
        backgroundColor: color.hex,
        width: "100%",
        height: `${height}px`,
        position: "absolute",
        top: 0
    };
    const newElement = <div style={navStyle}/>;
    ReactDOM.render(newElement, document.getElementById("creation-desk"));
}

export const OptionFooter = () => {
    return(
        <div className="menu-option">
            Footer
        </div>
    );
}

export const OptionSideBar = () => {
    const [active, setActive] = useState(false);
    return(
        <div className="menu-option" onClick={() => setActive(active => !active)}>
            Side Bar
            {active && <h1>Helloo</h1>}
        </div>
    );
}

const showOptionSideBar = () => {
    window.document.getElementById('side-bar-choice').classList.toggle('invis');
}

export const OptionTable = () => {
    return(
        <div className="menu-option">
            Table
        </div>
    );
}

export const OptionSection = () => {
    return(
        <div className="menu-option">
            Section
        </div>
    );
}
