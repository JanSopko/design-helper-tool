import React, { useReducer } from 'react';
import Footer from "../Footer";
import { CreationDesk } from "./CreationDesk";
import { CreateMenu } from "./menu/CreateMenu";

export const ACTIONS = {
    NAVBAR_HEIGHT: 'setNavbarHeight'
};

const init = () => {
    return layoutData.pageStructure;
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.NAVBAR_HEIGHT:
            const newNavbar = {...state.navbar};
            newNavbar.height = action.payload.height;
            return {...state, navbar: newNavbar};
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