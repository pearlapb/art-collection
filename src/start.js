import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from './components/App.js'

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>
        </Route>
    </Router>
)

ReactDOM.render(
    router,
    document.getElementById('main')
);
