import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashBoard from "./components/layout/dashboard/DashBoard";
import LandingPage from "./components/layout/landingpage/LandingPage";
import NotFoundApp from "./views/404/NotFoundApp";
function Routes() {
    return useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/404", element: <NotFoundApp /> },
        { path: "*", element: <Navigate to="/404" /> },

        {
            path: "/app",
            element: <DashBoard />,
        },
    ]);
}

export default Routes;
