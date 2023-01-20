import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
// routes
import MainRoutes from "./Main.Routes";
import AuthenticationRoutes from "./Authenticated.Routes";
import Layout from "../layout";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
<<<<<<< HEAD
    // const { isAuthenticated } = useSelector((state) => state.auth);
    const isAuthenticated= true
=======
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated = true;
>>>>>>> 09170ba (cards carousal)

  if (isAuthenticated) {
    return useRoutes([MainRoutes]);
  } else {
    return useRoutes([AuthenticationRoutes]);
  }
}
