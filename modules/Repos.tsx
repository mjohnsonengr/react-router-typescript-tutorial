import * as React from 'react';
import {NavLink} from './NavLink';
import RouterContext = ReactRouter.RouterContext;
import History = HistoryModule.History;

interface ReposProps extends React.Props<Repos> { }

interface ContextRouter extends History { }

interface ReposContext {
    router: ContextRouter;
}

export class Repos extends React.Component<ReposProps, {}> {
    context: ReposContext;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object
    };

    public handleSubmit(event: React.FormEvent) {
        // to get proper typing, this part is either complex or rather hacky
        // it has coupled logic in that it knows more than it should about the structure of the form
        // best way is probably to create a new component for the form.
        // but this solution is better than no typing at all!
        event.preventDefault();
        var form = event.target as HTMLFormElement;
        var userInput = form.elements[0] as HTMLInputElement;
        var repoInput = form.elements[1] as HTMLInputElement;
        const userName = userInput.value;
        const repo = repoInput.value;
        const path = `/repos/${userName}/${repo}`
        this.context.router.push(path);
    }

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
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/> / {' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
