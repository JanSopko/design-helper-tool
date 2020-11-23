import React from 'react';
import MenuOption from "./MenuOption";
import { INIT_STYLE, savePage } from "../CreatePageWrapper";
import {
    NavbarEditor,
    BodyEditor,
    SidebarEditor,
    SectionsEditor,
    FooterEditor
} from "./ElementEditors";

export const CreateMenu = ({store, dispatch}) => {
    store.navbar = store.navbar || {};
    return(
        <div id="create-menu">
            <button className="button-green" onClick={() => savePage(store)}>Save</button>
            <MenuOption text="Navbar" content={<NavbarEditor navbar={store.navbar || INIT_STYLE.navbar} dispatch={dispatch}/>}/>
            <MenuOption text="Body" content={<BodyEditor body={store.body || {}} dispatch={dispatch}/>}/>
            <MenuOption text="Sidebar" content={<SidebarEditor/>}/>
            <MenuOption text="Sections" content={<SectionsEditor/>}/>
            <MenuOption text="Footer" content={<FooterEditor/>}/>
        </div>
    );
}