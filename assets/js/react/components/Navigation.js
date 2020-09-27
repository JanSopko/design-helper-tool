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

    render() {
        return(
            <div id="navbar">
                <ul>
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