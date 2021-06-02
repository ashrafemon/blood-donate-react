import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component, isAuthenticate, currentUser, ...rest }) => {
    const routeComponent = (props) => {
        if (isAuthenticate) {
            return <Redirect to={{ pathname: "/home" }} />;
        } else {
            return React.createElement(component, props);
        }
    };
    return <Route {...rest} render={routeComponent} />;
};
export default PublicRoute;
