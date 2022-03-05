import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LandingPage from "./components/layout/landingpage/LandingPage";
import NotFoundApp from "./views/404/NotFoundApp";
function Routes() {
    return useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/404", element: <NotFoundApp /> },
        { path: "*", element: <Navigate to="/404" /> },
    ]);
}

export default Routes;
