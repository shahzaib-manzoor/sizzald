import { useLocation, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
// routes
import MainRoutes from "./Main.Routes";
import AuthenticationRoutes from "./Authenticated.Routes";
import Layout from "../layout";
import { useEffect } from "react";
import { NotFound } from "../components/404";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated = localStorage.getItem("auth");

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isAuthenticated) {
    return useRoutes([
      MainRoutes,
      {
        path: "*",
        element: <Layout />,
        children:[
          {
            path:'*',
            element:<NotFound/>
          }
        ]
      }
    ]);
  } else {
    return useRoutes([AuthenticationRoutes]);
  }
}
