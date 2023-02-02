import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MobileFoter from "../layout/Footer/MobileFoter";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MiniSideBar from "./SideBar/MiniSideBar";
import {useDispatch} from 'react-redux';
import { setDrawer } from "../store/slices/layoutSlice";

// import { outLet, sideBar } from "./SideBar/Sidebarstyle";
const Layout = () => {
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileDrawer, setmobileDrawer] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width: 960px)");
  const iSLargeScreen = useMediaQuery("(min-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
    dispatch(setDrawer(!openDrawer));
  };
  const handleMObileDrawer = () => {
    setmobileDrawer(true);
  };
  const handlemObileDrawer = () => {
    setmobileDrawer(!mobileDrawer);
  };
  // console.log(isMediumScreen)
  //  ui
  const sideBar = {
    width: openDrawer
      ? "4%"
      : mobileDrawer
      ? "100%"
      : { xs: "100%", sm: "12%", md: "0%", lg: "25%", xl: "17%" },
    // mt: "30px",
    display: { xs: mobileDrawer ? "block" : "none", lg: "block", sm: "block" },
  };
  const outLet = {
    width: {
      xs: "100%",
      sm: openDrawer ? "93%" : "88%",
      lg: openDrawer ? "96%" : "75%",
      xl: openDrawer ? "96%" : "83%",
    },
    // mt: "30px",
    display: "flex",
    flexDirection: "column",
  };
  console.log(openDrawer, iSLargeScreen);
  console.log(window.innerWidth);
  return (
    <div>
      <Header
        handleDrawer={handleDrawer}
        handlemObileDrawer={handlemObileDrawer}
      />
      <Box sx={{ display: "flex" }}>
        <Box sx={sideBar}>
          {iSLargeScreen && (
            <>
              {openDrawer ? (
                <MiniSideBar />
              ) : (
                // <SideBar
                //   sx={{ transition: "widt 5s" }}
                //   width={openDrawer ? "20%" : "0%"}
                // />
                <SideBar openDrawer={openDrawer} />
              )}
            </>
          )}
          {isMediumScreen && <>{openDrawer ? <SideBar /> : <MiniSideBar />}</>}
          {isSmallScreen && (
            <>
              {
                !openDrawer ? (
                  <SideBar width={openDrawer ? "20%" : "0%"} />
                ) : (
                  <></>
                )
                // <MiniSideBar width={openDrawer ? "7%" : "0%"} />
              }
            </>
          )}
        </Box>
        <Box sx={outLet}>
          <Box
            sx={{
              display: { xs: mobileDrawer ? "none" : "block", sm: "block" },
            }}
          >
            <Outlet />
          </Box>
          <Footer />
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
            }}
          >
            <MobileFoter handleMObileDrawer={handleMObileDrawer} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Layout;
