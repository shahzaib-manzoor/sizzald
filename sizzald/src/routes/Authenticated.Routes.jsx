import { lazy } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/Signup";
import Layout from "../layout";

// project import

// login option 3 routing
const AuthLogin = import("../components/Login/Login");

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  children: [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signup/:code",
      element: <Signup />,
    },
  ],
};

export default AuthenticationRoutes;
