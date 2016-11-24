import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import SimpleMenu from './SimpleMenu';

function App({ children }) {
    return (
        <div className='container-fluid'>
            <h3>React ContextMenu <small>Context menus using react</small></h3>
            <div className='col-xs-3'>
                <ul className='nav nav-pills nav-stacked'>
                    <li>
                        <Link to='/simple-menu'>Simple Menu</Link>
                    </li>
                </ul>
            </div>
            <div className='col-xs-9' id='main'>
                {children}
            </div>
        </div>
    );
}

const Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={SimpleMenu}/>
            <Route path='simple-menu' component={SimpleMenu}/>
        </Route>
    </Router>
);

ReactDOM.render(Routes, document.getElementById('main'));
