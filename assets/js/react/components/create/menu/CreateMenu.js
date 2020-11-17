import React from 'react';
import MenuOption from "./MenuOption";
import { INIT_STYLE } from "../CreatePageWrapper";
import {
    NavbarEditor,
    SidebarEditor,
    SectionsEditor,
    FooterEditor
} from "./ElementEditors";

export const CreateMenu = ({store, dispatch}) => {
    store.navbar = store.navbar || {};
    return(
        <div id="create-menu">
            <MenuOption text="Navbar" content={<NavbarEditor navbar={store.navbar || INIT_STYLE.navbar} dispatch={dispatch}/>}/>
            <MenuOption text="Sidebar" content={<SidebarEditor/>}/>
            <MenuOption text="Sections" content={<SectionsEditor/>}/>
            <MenuOption text="Footer" content={<FooterEditor/>}/>
        </div>
    );
}