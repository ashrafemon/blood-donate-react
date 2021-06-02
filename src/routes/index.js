import React from "react";

const routes = [
    {
        path: "/",
        exact: true,
        name: "Starter",
        component: React.lazy(() => import("../pages/Starter")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/login",
        exact: true,
        name: "Login",
        component: React.lazy(() => import("../pages/Login")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        exact: true,
        name: "Register",
        component: React.lazy(() => import("../pages/Register")),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/home",
        exact: true,
        name: "Home",
        component: React.lazy(() => import("../pages/Home")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/profile",
        exact: true,
        name: "Profile",
        component: React.lazy(() => import("../pages/Profile")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/notifications",
        exact: true,
        name: "Notification",
        component: React.lazy(() => import("../pages/Notifications")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/donations",
        exact: true,
        name: "Donations",
        component: React.lazy(() => import("../pages/Donations")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/requests",
        exact: true,
        name: "Requests",
        component: React.lazy(() => import("../pages/Requests")),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "*",
        exact: true,
        name: "NotFound",
        component: React.lazy(() => import("../pages/NotFound")),
        meta: {
            requiresAuth: false,
        },
    },
];

export default routes;
