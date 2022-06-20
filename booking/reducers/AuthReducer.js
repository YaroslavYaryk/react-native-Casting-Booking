import { AUTHENTICATE, LOGOUT, SET_DID_TRY_TO_LOGIN } from "../actions/Auth";

const initialState = {
    token: null,
    didTryToLogin: false,
    userEmail: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                didTryToLogin: true,
                userEmail: action.userEmail,
            };
        case LOGOUT:
            return initialState;
        case SET_DID_TRY_TO_LOGIN:
            return {
                ...state,
                didTryToLogin: true,
            };
        default:
            return state;
    }
};
