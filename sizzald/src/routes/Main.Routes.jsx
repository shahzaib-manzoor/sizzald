import { lazy } from "react";

import Dashboard from "../components/Dashboard";
import Favourite from "../components/Favourite";
import Picks from "../components/Picks";
import Signup from "../components/Signup";
import Layout from "../layout";
import RecentComp from "../components/Recent/RecentComp";
import Slot from "../components/Slot/Slot";
import HotGame from "../components/HotGame/HotGame";
import NewRelease from "../components/NewRelease/NewRelease";
import HighVolatility from "../components/HighVolatility/HighVolatility.jsx";
import FeatureBuyIn from "../components/FeatureBuyIn/FeatureBuyIn";
import TableGame from "../components/TableGame/TableGame";
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/picksforyou",
      element: <Picks />,
    },
    {
      path: "/favourite",
      element: <Favourite />,
    },
    {
      path: "/recent",
      element: <RecentComp />,
    },
    {
      path: "/slot",
      element: <Slot />,
    },
    {
      path: "/hotgame",
      element: <HotGame />,
    },
    {
      path: "/newrelease",
      element: <NewRelease />,
    },
    {
      path: "/highvolatility",
      element: <HighVolatility />,
    },
    {
      path: "/featurebuyin",
      element: <FeatureBuyIn />,
    },
    {
      path: "/tablegame",
      element: <TableGame />,
    },
  ],
};

export default MainRoutes;
