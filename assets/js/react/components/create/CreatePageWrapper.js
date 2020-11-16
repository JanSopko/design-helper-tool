import React, { useReducer } from 'react';
import Footer from "../Footer";
import { CreationDesk } from "./CreationDesk";
import { CreateMenu } from "./menu/CreateMenu";

export const ACTIONS = {
    NAVBAR_HEIGHT: 'setNavbarHeight',
    NAVBAR_BACKGROUND_COLOR: 'setNavbarBackgroundColor',
    NAVBAR_TEXT_COLOR: 'setNavbarTextColor'
};

const init = () => {
    return layoutData.pageStructure;
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.NAVBAR_HEIGHT:
            const newNavbarH = {...state.navbar};
            newNavbarH.height = action.payload.height;
            return {...state, navbar: newNavbarH};
        case ACTIONS.NAVBAR_BACKGROUND_COLOR:
            const newNavbarBg = {...state.navbar};
            newNavbarBg.backgroundColor = action.payload.backgroundColor;
            return {...state, navbar: newNavbarBg};
        case ACTIONS.NAVBAR_TEXT_COLOR:
            const newNavbarTc = {...state.navbar};
            newNavbarTc.color = action.payload.color;
            return {...state, navbar: newNavbarTc};
        default:
            return state;
    }
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