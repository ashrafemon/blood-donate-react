export const API_URL = "http://127.0.0.1:8000/api/";
// export const API_URL = 'https://donate-laravel.herokuapp.com/api/'

// export const JSON_KEEPER = "https://jsonkeeper.com/";
// export const FETCH_BLOOD_GROUPS_URL = "b/IE9P";
// export const FETCH_CAMPAIGNS_URL = "b/IM2C";

export const api_routes = {
    // Auth
    auth_login: API_URL + "auth/login",
    auth_register: API_URL + "auth/register",
    auth_logout: API_URL + "auth/logout",
    auth_me: API_URL + "auth/me",

    fetch_blood_groups: API_URL + "blood_groups",
    fetch_campaigns: API_URL + "campaigns",
    fetch_badges: API_URL + "badges",
    fetch_donors: API_URL + "donors",
};
