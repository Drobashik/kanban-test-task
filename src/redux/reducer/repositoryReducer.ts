import { RepositoryActions } from "../actions/actions";

type RepositoryState = {
    repoName: string;
    repositories: any[];
    loading: boolean;
    error: string;
}

type RepositoryAction = {
    type: string;
    payload: any;
}

export const repositoryReducer = (state: RepositoryState, action: RepositoryAction) => {
    switch (action.type) {
        case RepositoryActions.REPOSITORY_REQUEST:
            return {...state, loading: true, repoName: action.payload};
        case RepositoryActions.REPOSITORY_FULFILLED:
            return {...state, repositories: action.payload, loading: false};
        case RepositoryActions.REPOSITORY_FAILED:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
}