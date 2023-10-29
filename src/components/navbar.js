import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <a href="#">Internacional</a>
                <a href="#">Nacional</a>
                <a href="#">Cine</a>
                <a href="#">Tecnologia</a>
                <a href="#">Deportes</a>
            </div>
        );
    }
}