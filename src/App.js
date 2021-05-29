import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import LoadingPage from "./components/shared/LoadingPage";
import { useDispatch } from "react-redux";
import { fetchMe } from "./store/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(fetchMe());
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <ToastContainer />
                <Switch>
                    {routes.map((item, index) => (
                        <Route
                            key={index}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                            name={item.name}
                        />
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
