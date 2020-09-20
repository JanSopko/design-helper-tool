import React from 'react';

export default function Navbar(props) {

    return(
        <div id="navbar">
            <ul>
                {props.navItems.map(item => {
                    return (
                        <li key={item.id}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}