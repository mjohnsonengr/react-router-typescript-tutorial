import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import {App} from './modules/App';
import {About} from './modules/About';
import {Home} from './modules/Home';
import {Repo} from './modules/Repo';
import {Repos} from './modules/Repos';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
