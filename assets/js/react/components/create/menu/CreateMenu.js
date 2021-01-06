import React, { useReducer } from 'react';
import MenuOption from "./MenuOption";
import { INIT_STYLE, savePage } from "../CreatePageWrapper";
import {
    NavbarEditor,
    BodyEditor,
    SidebarEditor,
    SectionsEditor,
    FooterEditor
} from "./ElementEditors";

const menuTexts = {
    navbar: 'Navbar',
    body: 'Body',
    sidebar: 'Sidebar',
    sections: 'Sections',
    footer: 'Footer'
};

const menuOptionActive = '';

const getMenuOptionActive = () => {
    return menuOptionActive;
}

const menuReducer = (currentItem, activeOption) => {
    return activeOption;
}

export const CreateMenu = ({store, dispatch}) => {
    const [activeMenuOption, menuDispatch] = useReducer(menuReducer, {}, getMenuOptionActive);
    store.navbar = store.navbar || {};
    return(
        <div id="create-menu">
            <button className="button-green" onClick={() => savePage(store)}>Save</button>
            <MenuOption
                initActive={activeMenuOption === menuTexts.navbar}
                menuDispatch={menuDispatch}
                text={menuTexts.navbar}
                content={<NavbarEditor navbar={store.navbar || INIT_STYLE.navbar} dispatch={dispatch}/>}
            />
            <MenuOption
                initActive={activeMenuOption === menuTexts.body}
                menuDispatch={menuDispatch}
                text={menuTexts.body}
                content={<BodyEditor body={store.body || {}} dispatch={dispatch}/>}
            />
            <MenuOption
                initActive={activeMenuOption === menuTexts.sidebar}
                menuDispatch={menuDispatch}
                text={menuTexts.sidebar}
                content={<SidebarEditor/>}
            />
            <MenuOption
                initActive={activeMenuOption === menuTexts.sections}
                menuDispatch={menuDispatch}
                text={menuTexts.sections}
                content={<SectionsEditor/>}
            />
            <MenuOption
                initActive={activeMenuOption === menuTexts.footer}
                menuDispatch={menuDispatch}
                text={menuTexts.footer}
                content={<FooterEditor footer={store.footer} dispatch={dispatch}/>}
            />
        </div>
    );
}