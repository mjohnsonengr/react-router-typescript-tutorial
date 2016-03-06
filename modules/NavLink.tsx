import * as React from 'react';
import {Link} from 'react-router';
import LinkProps = ReactRouter.LinkProps;

interface NavLinkProps extends LinkProps {
    ref?: any;
}

export function NavLink(props: NavLinkProps) { return <Link {...props} activeClassName="active"/>; }