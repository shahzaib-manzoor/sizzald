import { lazy,Suspense } from "react";
// const Dashboard=lazy(()=>import('../components/Dashboard'))
// import Dashboard from "../components/Dashboard";
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
import Loatry from "../components/Loatry";
import Limbo from "../components/SizzldGames/Limbo";
import SizzldMainPage from "../components/SizzldMainPage";
import Affilate from "../components/Affilate";
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element:  <Dashboard />
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
    {
      path: "/loatry",
      element: <Loatry />,
    },
    {
      path: "/limbo",
      element: <Limbo />,
    },
    {
      path: "/sizzldGames",
      element: <SizzldMainPage />,
    },
    {
      path: "/affilate",
      element: <Affilate />,
    },
  ],
};

export default MainRoutes;
