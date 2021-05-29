import * as types from "./../types";

const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,
    blood_groups: [],
    message: {
        show: false,
        type: "",
        text: "",
    },
    suggestedText: {
        basic: "Provide your real name for your identity. Your name will be used for search.",
        contact:
            "Please provide correct phone no. This information will keep safe.",
        blood: "Your blood group need to be accurate. If you don't know about it please contact nearest clinic.",
        weight: "Note: you can not donate blood if you're under weight. Minimum weight for donation required 50KG",
        gender: "Defining your gender will let us know bring new features for mothers health care.",
        address:
            "Please provide correct address. This information will keep safe.",
        age: "Correct birthdate give you best experience with the community. Don't hide it.",
        photo: "Please do not use a model or doll avatar. Please keep faith on yourself you're beautiful too.",
    },
    registered: false,
    busyBox: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };
        case types.CURRENT_USER:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };
        case types.REGISTER:
            return {
                ...state,
                registered: action.payload,
            };
        case types.RESET_REGISTER:
            return {
                ...state,
                registered: action.payload,
            };
        case types.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                currentUser: null,
            };
        case types.FETCH_BLOOD_GROUPS:
            return {
                ...state,
                blood_groups: action.payload,
            };
        case types.TOGGLE_BUSY_BOX:
            return {
                ...state,
                busyBox: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
