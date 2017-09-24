import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <p className="menu-item">Collection</p>
                <p className="menu-item">Artists</p>
                <p className="menu-item">Add Piece</p>
                <p className="menu-item">Check Stats</p>
            </div>
        )
    }
}
