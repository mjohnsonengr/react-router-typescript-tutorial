import * as React from 'react';
import {Link} from 'react-router';
import LinkProps = ReactRouter.LinkProps;

export class NavLink extends React.Component<LinkProps, {}> {
    public render()
    {
        return <Link {...this.props} activeClassName="active"/>;
    }
}

// I think the problem with the following is something that is fixed in TypeScript 1.8...
// https://github.com/Microsoft/TypeScript/issues/4861
//export function NavLink(props: any) { return <Link {...props} activeClassName="active"/>; }