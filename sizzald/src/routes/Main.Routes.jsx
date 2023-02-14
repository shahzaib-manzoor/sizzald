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
import { appRoutes } from "../static/routeNames";
import Afa from "../components/Sponserships/Afa/Afa";
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
      path: appRoutes.PicksForYou,
      element: <Picks />,
    },
    {
      path: appRoutes.Favourite,
      element: <Favourite />,
    },
    {
      path: appRoutes.Recent,
      element: <RecentComp />,
    },
    {
      path: appRoutes.Slot,
      element: <Slot />,
    },
    {
      path: appRoutes.Hotgame,
      element: <HotGame />,
    },
    {
      path: appRoutes.Newrelease,
      element: <NewRelease />,
    },
    {
      path:appRoutes.Highvolatility,
      element: <HighVolatility />,
    },
    {
      path: appRoutes.Featurebuyin,
      element: <FeatureBuyIn />,
    },
    {
      path: appRoutes.Tablegame,
      element: <TableGame />,
    },
    {
      path: appRoutes.Loatry,
      element: <Loatry />,
    },
    {
      path: appRoutes.Limbo,
      element: <Limbo />,
    },
    {
      path: appRoutes.SizzldGames,
      element: <SizzldMainPage />,
    },
    {
      path: appRoutes.Affilate,
      element: <Affilate />,
    },
    {
      path: "/languages",
      element:  <Dashboard />
    },
    {
      path: appRoutes.sponsership.root,
      element:  <Dashboard />
    },
    {
      path: appRoutes.sponsership.afa,
      element:  <Afa/>
    },
  ],
};

export default MainRoutes;
