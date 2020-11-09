import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputColor from "react-input-color";
import {elementOrParentHasClass} from "../../../../functions/elementOrParentHasClass";

export const OptionNavbar = () => {
    return(
        <div className="menu-option">
            Navbar
        </div>
    );
}

export const OptionFooter = () => {
    return(
        <div className="menu-option">
            Footer
        </div>
    );
}

export const OptionSideBar = () => {
    return(
        <div className="menu-option">
            Side Bar
        </div>
    );
}

export const OptionTable = () => {
    return(
        <div className="menu-option">
            Table
        </div>
    );
}

export const OptionSection = () => {
    return(
        <div className="menu-option">
            Section
        </div>
    );
}
