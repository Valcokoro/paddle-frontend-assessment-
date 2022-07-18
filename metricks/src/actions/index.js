import github from "../apis/github";
import {FETCH_REPOS} from '../actions/types';




export const fetchRepos = () => async dispatch => {
     
    const response = await github.get('');

    dispatch({ type: FETCH_REPOS, payload: response.data})
}