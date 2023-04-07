import axios from 'axios';
import { userTypes } from '../constants';
const baseURL = "https://randomuser.me/api/";

export function fetchUserDetails(reqParams) {
    return async function (dispatch) {
        const apiResponse = await axios.get(`${baseURL}?results=${reqParams.pageSize}`);
        if (apiResponse.status === 200) {
            dispatch(setUserDetails(apiResponse.data.results));
        } else {
            dispatch(setUserDetails([]))
        }

    };
}

function setUserDetails(data) {
    return {
        type: userTypes.SET_USERS,
        payload: data
    };
}