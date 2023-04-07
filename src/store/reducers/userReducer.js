import { userTypes } from '../constants';

const initialState = {
    isLoading: true,
    userData: []
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userTypes.SET_USERS:
            return {
                ...state,
                userData: payload
            };
        default:
            return state;
    }
}