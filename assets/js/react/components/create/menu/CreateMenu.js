import React from 'react';
import MenuOption from "./MenuOption";
import {
    NavbarEditor,
    SidebarEditor,
    SectionsEditor,
    FooterEditor
} from "./ElementEditors";

export const CreateMenu = ({store, dispatch}) => {
    return(
        <div id="create-menu">
            <MenuOption text="Navbar" content={<NavbarEditor navbar={store.navbar} dispatch={dispatch}/>}/>
            <MenuOption text="Sidebar" content={<SidebarEditor/>}/>
            <MenuOption text="Sections" content={<SectionsEditor/>}/>
            <MenuOption text="Footer" content={<FooterEditor/>}/>
        </div>
    );
}