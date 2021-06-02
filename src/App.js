import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";
import ProtectedRoute from "./components/routes/ProtectedRoutes";
import PublicRoute from "./components/routes/PublicRoutes";
import LoadingPage from "./components/shared/LoadingPage";
import routes from "./routes";
import { fetchMe } from "./store/actions/authActions";

const App = () => {
    const dispatch = useDispatch();
    const busyBox = useSelector((state) => state.auth.busyBox);
    const isAuthenticate = useSelector((state) => state.auth.isAuthenticate);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(fetchMe());
        }
    }, [dispatch]);

    if (busyBox) {
        return <LoadingPage />;
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <ToastContainer />
                <Switch>
                    {routes.map((item, i) =>
                        item.meta.requiresAuth ? (
                            <ProtectedRoute
                                isAuthenticate={isAuthenticate}
                                key={i}
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />
                        ) : (
                            <PublicRoute
                                isAuthenticate={isAuthenticate}
                                key={i}
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />
                        )
                    )}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
