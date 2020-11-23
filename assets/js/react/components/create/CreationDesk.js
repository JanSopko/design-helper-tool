import React, { useEffect } from 'react';
import { INIT_STYLE } from "./CreatePageWrapper";

export const CreationDesk = ({store = {}}) => {

    store.navbar = store.navbar || INIT_STYLE.navbar;
    let bodyStyle = store.body || {};
    let navItems = store.navbar.items || [];
    const navStyle = {...store.navbar, height: `${store.navbar.height || 5}rem`};
    navStyle.display = 'flex';
    navStyle.justifyContent = 'space-around';
    return(
        <div id="creation-desk" style={bodyStyle}>
            <nav style={navStyle}>
                    {navItems.map(item => {
                        return <a href={item.url}>{item.text}</a>;
                    })}
                    text
            </nav>
            text2
        </div>
    );
}