import { applyMiddleware, combineReducers, createStore } from "redux";
import { repositoryReducer } from "./reducer/repositoryReducer";
import thunk from "redux-thunk";

const reducers = combineReducers(repositoryReducer)
export const store = createStore(reducers, applyMiddleware(thunk))