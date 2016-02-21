import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory } from 'react-router';
import {App} from './modules/App';
import {About} from './modules/About';
import {Home} from './modules/Home';
import {Repo} from './modules/Repo';
import {Repos} from './modules/Repos';

console.log("Halp!");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
