import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component, isAuthenticate, ...rest }) => {
    const routeComponent = (props) =>
        isAuthenticate ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{ pathname: "/login" }} />
        );
    return <Route {...rest} render={routeComponent} />;
};
export default ProtectedRoute;
