import React from "react";

const routes = [
    {
        path: "/",
        exact: true,
        name: "Starter",
        component: React.lazy(() => import("../components/Starter")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/login",
        exact: true,
        name: "Login",
        component: React.lazy(() => import("../components/Auth/Login")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        exact: true,
        name: "Register",
        component: React.lazy(() => import("../components/Auth/Register")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/home",
        exact: true,
        name: "Home",
        component: React.lazy(() => import("../components/User/Home")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/profile",
        exact: true,
        name: "Profile",
        component: React.lazy(() => import("../components/User/Profile")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/notifications",
        exact: true,
        name: "Notification",
        component: React.lazy(() => import("../components/User/Notifications")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/donations",
        exact: true,
        name: "Donations",
        component: React.lazy(() => import("../components/User/Donations")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/requests",
        exact: true,
        name: "Requests",
        component: React.lazy(() => import("../components/User/Requests")),
        meta: {
            requiresAuth: true,
        },
    },
];

export default routes;
