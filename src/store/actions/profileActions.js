import { api_routes } from "../../constants/urls";
import { jsonTypeHeaders } from "../../utils/helpers";
import * as types from "../types";

const TOKEN = localStorage.getItem("token");

export const fetchCampaigns = () => (dispatch) => {
    fetch(api_routes.fetch_campaigns, {
        method: "GET",
        headers: jsonTypeHeaders,
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.status === "done") {
                dispatch({
                    type: types.FETCH_CAMPAIGNS,
                    payload: res.campaigns,
                });
            }
        })
        .catch((err) => console.log(err));
};

export const fetchBadges = () => (dispatch) => {
    fetch(api_routes.fetch_badges, {
        method: "GET",
        headers: jsonTypeHeaders,
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.status === "done") {
                dispatch({
                    type: types.FETCH_BADGES,
                    payload: res.badges,
                });
            }
        })
        .catch((err) => console.log(err));
};

export const fetchDonors = () => (dispatch) => {
    fetch(api_routes.fetch_donors, {
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
                    type: types.FETCH_DONORS,
                    payload: res.donors,
                });
            }
        })
        .catch((err) => console.log(err));
};
