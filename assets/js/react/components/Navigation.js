import React from 'react';
import axios from 'axios';

export default class Navigation extends React.Component{

    constructor() {
        super();

        this.navbarDataUrl = '/ui-data/navbar';
        this.state = {
            navItems: []
        }
    }

    componentDidMount() {
        axios.get(this.navbarDataUrl).then(res => {
            this.setState({
                navItems: res.data
            });
        });
    }

    toggleMenu() {
        document.getElementById("menu-list").classList.toggle('active');
    }

    render() {
        return(
            <div id="navbar">
                <div className="hamburger" onClick={this.toggleMenu}>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </div>
                <ul id="menu-list">
                {this.state.navItems.map(item => {
                  return(
                      <li key={item.id} onClick={() => window.location.href = item.link}>
                          {item.link === '/' &&
                          <img src="favicon.png" alt="logo" id="navbar-logo"/>
                          }
                          <a href={item.link}>{item.name}</a>
                      </li>
                  );
                })}
                </ul>
            </div>
        );
    }
}