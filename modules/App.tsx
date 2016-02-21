import * as React from 'react';
import {Link} from 'react-router';
import {NavLink} from './NavLink';

interface AppProps extends React.Props<App> { }

export class App extends React.Component<AppProps, {}> {
    public render()
    {
        return (
            <div>
                <h1>Ghettohub Issues</h1>
                <ul role="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/repos">Repos</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}