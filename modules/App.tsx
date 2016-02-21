import * as React from 'react';
import {Link} from 'react-router';
import {NavLink} from './NavLink';

interface AppProps {
    children: React.ReactElement<{}>;
}

export function App(props:AppProps) {
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
            {props.children}
        </div>
    );
}