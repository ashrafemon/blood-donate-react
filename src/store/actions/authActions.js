import * as types from "../types";
import { API_URL } from "../../utils/urls";
import { formDataBuilder, jsonTypeHeaders } from "../../utils/helpers";
import { toast } from "react-toastify";

const TOKEN = localStorage.getItem("token");

// Mutations
export const fetchBloodGroups = () => (dispatch) => {
    fetch(API_URL + "blood_group", {
        method: "GET",
        headers: jsonTypeHeaders,
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.status === "done") {
                dispatch({
                    type: types.FETCH_BLOOD_GROUPS,
                    payload: res.blood_groups,
                });
            }
        })
        .catch((err) => console.log(err));
};

export const login = (data) => (dispatch) => {
    dispatch({ type: types.TOGGLE_BUSY_BOX, payload: true });
    fetch(API_URL + "auth/login", {
        method: "POST",
        headers: jsonTypeHeaders,
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
            if (res.status === "validate_error") {
                Object.keys(res.errors).forEach((key) => {
                    toast.error(key[0]);
                });
            } else if (res.status === "done") {
                toast.success(res.message);
                localStorage.setItem("token", res.token);
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        token: res.token,
                        currentUser: res.user,
                        isAuthenticate: true,
                    },
                });
            } else if (res.status === "error") {
                toast.error(res.message);
            }
        })
        .catch((err) => console.log(err));
};

export const register = (data) => (dispatch) => {
    dispatch({ type: types.TOGGLE_BUSY_BOX, payload: true });

    let formedData = formDataBuilder(data);

    fetch(API_URL + "auth/register", {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: formedData,
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
            if (res.status === "validate_error") {
                Object.keys(res.errors).forEach((key) => {
                    toast.error(key[0]);
                });
            } else if (res.status === "done") {
                toast.success(res.message);
                dispatch({ type: types.REGISTER, payload: true });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
        });
};

export const logout = () => (dispatch) => {
    dispatch({ type: types.TOGGLE_BUSY_BOX, payload: true });
    fetch(API_URL + "auth/logout", {
        method: "POST",
        headers: {
            ...jsonTypeHeaders,
            Authorization: TOKEN,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
            if (res.status === "done") {
                toast.success(res.message);
                localStorage.removeItem("token");
                dispatch({ type: types.LOGOUT });
            }
        })
        .catch((err) => console.log(err));
};

export const fetchMe = () => (dispatch) => {
    fetch(API_URL + "auth/me", {
        method: "GET",
        headers: {
            ...jsonTypeHeaders,
            Authorization: TOKEN,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.status === "done") {
                dispatch({
                    type: types.CURRENT_USER,
                    payload: {
                        token: TOKEN,
                        currentUser: res.user,
                        isAuthenticate: true,
                    },
                });
            }
        })
        .catch((err) => console.log(err));
};
