import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory } from 'react-router';
// import routes and pass them into <Router/>
import routes from './modules/routes';

ReactDOM.render((
    <Router routes={routes} history={browserHistory}/>
), document.getElementById('app'));
