import React from 'react';

export default function Navbar(props) {

    return(
        <div id="navbar">
            <ul>
                {props.navItems.map(item => {
                    return (
                        <li key={item.id} onClick={() => window.location.href = item.link}>
                            {item.link === '/' &&
                            <img src="favicon.png" alt="logo"/>
                            }
                            <a href={item.link}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}