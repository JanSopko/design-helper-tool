import React from 'react';
import axios from 'axios';
import LogoutLink from "./LogoutLink";
import { CustomAlert } from "./CustomAlert";

export default class Navigation extends React.Component{

    constructor() {
        super();

        this.navbarDataUrl = '/ui-data/navbar';
        this.state = {
            navItems: [],
            active: false
        }
    }

    componentDidMount() {
        axios.get(this.navbarDataUrl).then(res => {
            this.setState({
                navItems: res.data
            });
        });

        window.document.getElementsByTagName('body')[0].addEventListener('click', e => {
            if (e.target.id !== "menu-list"
                && !e.target.classList.contains("hamburger")
                && !e.target.classList.contains("hamburger-bar"))
            {
                e.preventDefault();
                document.getElementById("menu-list").classList.remove("active");
                document.getElementById("bar1").classList.remove('rotate1');
                document.getElementById("bar3").classList.remove('rotate2');
            }
        });
    }

    toggleMenu() {
        document.getElementById("menu-list").classList.toggle('active');
        document.getElementById("bar1").classList.toggle('rotate1');
        document.getElementById("bar3").classList.toggle('rotate2');
        const newState = !this.state.active;
        this.setState({
            active: newState
        });
    }

    render() {
        return(
            <div id="navbar">
                <div className="hamburger" id="menu-hamburger" onClick={this.toggleMenu}>
                    <span className="hamburger-bar" id="bar1"></span>
                    <span className="hamburger-bar" id="bar2"></span>
                    <span className="hamburger-bar" id="bar3"></span>
                </div>
                <ul id="menu-list">
                {this.state.navItems.map(item => {

                  if (item.id !== undefined) {
                      return (
                          <li key={item.id} onClick={() => window.location.href = item.link}>
                              {item.link === '/' &&
                              <img src="favicon.png" alt="logo" id="navbar-logo"/>
                              }
                              <a href={item.link}>{item.name}</a>
                          </li>
                      );
                  } else if (item.logout !== undefined) {
                      return (
                          <li key={item.logout}>
                            <LogoutLink path={item.path} text={item.logout}>
                            </LogoutLink>
                          </li>
                      );
                  }
                })}
                </ul>
            </div>
        );
    }
}