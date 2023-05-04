import { Dispatch } from "redux"

const GIT_HUB_URL = 'https://api.github.com/repos/facebook/react/issues';

export enum RepositoryActions {
    REPOSITORY_REQUEST = "REPOSITORY_REQUEST",
    REPOSITORY_FULFILLED = "REPOSITORY_FULFILLED",
    REPOSITORY_FAILED = "REPOSITORY_FAILED",
};

export const fetchReposiotories = (name: string, repository: string) => {
    return async (dispatch: Dispatch) => {
        try {

        } catch (error) {

        }
    }
}