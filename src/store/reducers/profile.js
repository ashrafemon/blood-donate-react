import * as types from "./../types";

const initialState = {
    campaigns: [],
    badges: [],
    donors: [],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CAMPAIGNS:
            return {
                ...state,
                campaigns: action.payload,
            };
        case types.FETCH_BADGES:
            return {
                ...state,
                badges: action.payload,
            };
        case types.FETCH_DONORS:
            return {
                ...state,
                donors: action.payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
