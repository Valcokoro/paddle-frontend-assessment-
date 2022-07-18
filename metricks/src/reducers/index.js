import { combineReducers } from "redux";
import {FETCH_REPOS} from '../actions/types';


const reposReducer = (repos=[], action) => {
    if(action.type === FETCH_REPOS){
        return[...repos, action.payload]
    }
    return repos;
}



export default combineReducers({
    repos: reposReducer
})
