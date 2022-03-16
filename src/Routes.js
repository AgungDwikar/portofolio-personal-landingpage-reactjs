import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Blog from "./components/layout/dashboard/Blog";
import Home from "./components/layout/dashboard/Home";
import Komponent from "./components/layout/dashboard/Komponent";
import Kontak from "./components/layout/dashboard/Kontak";
import LandingPage from "./components/layout/landingpage/LandingPage";
import Portofoliodb from "./components/layout/dashboard/Portofoliodb";
import SideBar from "./components/sidebar/SideBar";
import NotFoundApp from "./views/404/NotFoundApp";

function Routes() {
    return useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/404", element: <NotFoundApp /> },
        { path: "*", element: <Navigate to="/404" /> },

        {
            path: "/dashboard",
            element: <SideBar />,
            children: [
                { path: "home", element: <Home /> },
                { path: "blog", element: <Blog /> },
                { path: "portofolio", element: <Portofoliodb/> },
                { path: "kontak", element: <Kontak /> },
                { path: "komponentui", element: <Komponent /> },
            ],
        },
    ]);
}

export default Routes;
