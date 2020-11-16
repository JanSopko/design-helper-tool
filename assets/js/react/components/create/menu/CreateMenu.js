import React from 'react';
import MenuOption from "./MenuOption";
import {
    NavbarEditor,
    SidebarEditor,
    SectionsEditor,
    FooterEditor
} from "./ElementEditors";

export const CreateMenu = () => {
    return(
        <div id="create-menu">
            <MenuOption text="Navbar" content={<NavbarEditor/>}/>
            <MenuOption text="Sidebar" content={<SidebarEditor/>}/>
            <MenuOption text="Sections" content={<SectionsEditor/>}/>
            <MenuOption text="Footer" content={<FooterEditor/>}/>
        </div>
    );
}