import * as React from 'react';
import {RouteComponentProps} from "react-router";

interface RepoParams {
    repoName: string;
    userName: string;
}
interface RepoRouteParams { }
interface RepoProps extends RouteComponentProps<RepoParams, RepoRouteParams> { }

export function Repo(props: RepoProps) {
    return (
        <div>
            <h2>{props.params.repoName}</h2>
        </div>
    );
}