import React, { Component } from 'react';

import Menu from './Menu.js';
import SearchBar from './SearchBar.js';

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Menu />
                <SearchBar />
            </div>
        )
    }
}
