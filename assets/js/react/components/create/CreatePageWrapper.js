import React, { useReducer } from 'react';
import Footer from "../Footer";
import { CreationDesk } from "./CreationDesk";
import { CreateMenu } from "./menu/CreateMenu";
import reducer from "./reducer";
import axios from 'axios';

export const ACTIONS = {
    NAVBAR_HEIGHT: 'setNavbarHeight',
    NAVBAR_BACKGROUND_COLOR: 'setNavbarBackgroundColor',
    NAVBAR_TEXT_COLOR: 'setNavbarTextColor',
    NAVBAR_TEXT_SIZE: 'setNavbarTextSize',
    NAVBAR_SPACING_OPTION: 'setNavbarSpacingOption',
    NAVBAR_ITEM_TEXT_UPDATED: 'setNavbarItemText',
    NAVBAR_ITEM_URL_UPDATED: 'setNavbarItemUrl',
    NAVBAR_ITEM_ITEM_DELETED: 'deleteNavbarItem',
    NAVBAR_ITEM_ADDED: 'addedNavbarItem',

    BODY_BACKGROUND_COLOR: 'setBodyBackroundColor',
    BODY_TEXT_COLOR: 'setBodyTextColor',
    BODY_FONT_SIZE: 'setBodyFontSize'
};

export const INIT_STYLE = {
    navbar: {
        backgroundColor: '#aaaaaa',
        color: '#000000',
        height: 5
    }
};

const init = () => {
    return layoutData.pageStructure;
}

export const savePage = payload => {
    payload.navbar.height = payload.navbar.height || INIT_STYLE.navbar.height; //@todo refactor!
    axios.post(`/data/update_page/${layoutData.pageHash}`, {payload})
        .then(res => {
            if (res.data.message) {
                alert(res.data.message);
            }
        });
}

export const CreatePageWrapper = () => {
    const [state, dispatch] = useReducer(reducer, {}, init);

    console.log(state);
    return(
        <div id="content">

            <CreateMenu store={state} dispatch={dispatch}/>
            <CreationDesk store={state}/>
            <Footer/>
        </div>
    );
}