import React, { useEffect } from 'react';
import { INIT_STYLE } from "./CreatePageWrapper";

export const CreationDesk = ({store = {}}) => {

    store.navbar = store.navbar || INIT_STYLE.navbar;
    // useEffect(() => {
    //     document.getElementById('creation-desk').innerHTML = layoutData.pageBody;
    // }, []);
    // const myStyle = {
    //     height: store.navbar.height,
    //     backgroundColor: store.navbar.bgColor,
    //     color: store.navbar.textColor,
    //     fontFamily: store.navbar.font
    // };
    const navStyle = {...store.navbar, height: `${store.navbar.height || 5}rem`};
    return(
        <div id="creation-desk">
            <nav style={navStyle}>
                tekst
            </nav>
        </div>
    );
}