import * as React from 'react';
import {NavLink} from './NavLink';

interface ReposProps extends React.Props<Repos> { }

export class Repos extends React.Component<ReposProps, {}> {
    public render() {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li>
                        <NavLink to="/repos/rackt/react-router">React Router</NavLink>
                    </li>
                    <li>
                        <NavLink to="/repos/facebook/react">React</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}