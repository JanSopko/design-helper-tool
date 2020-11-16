import React, { useEffect } from 'react';

export const CreationDesk = ({store = {}}) => {

    // useEffect(() => {
    //     document.getElementById('creation-desk').innerHTML = layoutData.pageBody;
    // }, []);
    // const myStyle = {
    //     height: store.navbar.height,
    //     backgroundColor: store.navbar.bgColor,
    //     color: store.navbar.textColor,
    //     fontFamily: store.navbar.font
    // };
    const navStyle = {...store.navbar, height: `${store.navbar.height}rem`};
    return(
        <div id="creation-desk">
            <nav style={navStyle}/>
        </div>
    );
}