import React, { useReducer } from 'react';
import Footer from "../Footer";
import { CreationDesk } from "./CreationDesk";
import { CreateMenu } from "./menu/CreateMenu";
import reducer from "./reducer";
import axios from 'axios';

export const ACTIONS = {
    NAVBAR_HEIGHT: 'setNavbarHeight',
    NAVBAR_BACKGROUND_COLOR: 'setNavbarBackgroundColor',
    NAVBAR_TEXT_COLOR: 'setNavbarTextColor'
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

const savePage = payload => {
    payload.navbar.height = payload.navbar.height || INIT_STYLE.navbar.height; //@todo refactor!
    axios.post(`/data/update_page/${layoutData.pageHash}`, {payload})
        .then(res => console.log(res.data));
}

export const CreatePageWrapper = () => {
    const [state, dispatch] = useReducer(reducer, {}, init);

    console.log(state);
    return(
        <div id="content">
            <button className="button-green" onClick={() => savePage(state)}>Save</button>
            <CreateMenu store={state} dispatch={dispatch}/>
            <CreationDesk store={state}/>
            <Footer/>
        </div>
    );
}