import { Box, Button, ButtonGroup, styled, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import limboRounded from "../../assets/limbo_rounded.png";
import carshRounded from "../../assets/crash_rounded.png";
import kenoRounded from "../../assets/keno_rounded.png";
import hashRounded from "../../assets/hash_rounded.png";
import Roulette from "../../assets/roulette_rounded.png";
import ultimateDice from "../../assets/ultimate_dice.png";
import caveRounded from "../../assets/cave_rounded.png";
import coinFlip from "../../assets/coinflip_rounded.png";
import { NavLink } from "react-router-dom";
const SubMenu = ({ item }) => {
  let subMenuStyle = {
    paddingLeft: "20px",
    display: "flex",
    alignItems: "center",
    // gap: 1,
    textDecoration: "none",
    color: "white",
    // position:'relative',
    // marginBottom:"20px",
    justifyContent: "space-between",

    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "5px",
    },
    height: "60px",
    width: "inherit",
    paddingRight: "10px",
  };
  let subMenuActiveStyle = {
    textDecoration: "none",
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
    paddingLeft: "20px",
    display: "flex",
    alignItems: "center",
    gap: 1,
    justifyContent: "space-between",
    width: "inherit",
    paddingRight: "10px",

    // position:'relative',
    // marginBottom:"20px",

    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "5px",
    },
    height: "60px",
  };
  let menuStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "5px",
    },
    height: "46px",
    padding: item.subNav ? "7px 5px" : "7px 13px",
    textDecoration: "none",
    color: "white",
    width: "inherit",
  };
  let activeMenuStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "5px",
    },
    height: "46px",
    padding: item.subNav ? "7px 5px" : "7px 13px",
    background: "rgba(255, 255, 255, 0.1)",
    textDecoration: "none",
    color: "white",
    width: "inherit",
  };
  const [gameNav, setGameNav] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const gameHandler = (title) => {
    console.log("sjsj");
    if (title === "Sizzld Games") {
      setGameNav(true);
    } else {
      console.log("not sizzld");
    }
  };
  const sideData = [
    {
      title: "Limbo",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={limboRounded}
          alt=""
        />
      ),
      path: "/limbo",
    },
    {
      title: "Crash",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={carshRounded}
          alt=""
        />
      ),
      path: "/crash",
    },
    {
      title: "Keno",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={kenoRounded}
          alt=""
        />
      ),
      path: "/keno",
    },
    {
      title: "Hash Dice",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={hashRounded}
          alt=""
        />
      ),
      path: "/hashdice",
    },
    {
      title: "Roulette",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={Roulette} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Ultimate Dice",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={ultimateDice}
          alt=""
        />
      ),
      path: "/ultimatedice",
    },
    {
      title: "Cave Of Thunder",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={caveRounded}
          alt=""
        />
      ),
      path: "/caveofthunder",
    },
    {
      title: "Coinflip",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={coinFlip} alt="" />
      ),
      path: "/coinflip",
    },
    {
      title: "Limbo",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={limboRounded}
          alt=""
        />
      ),
      path: "/limbo",
    },
    {
      title: "Crash",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={carshRounded}
          alt=""
        />
      ),
      path: "/crash",
    },

    {
      title: "Keno",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={kenoRounded}
          alt=""
        />
      ),
      path: "/keno",
    },
    {
      title: "Hash Dice",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={hashRounded}
          alt=""
        />
      ),
      path: "/hashdice",
    },
    {
      title: "Roulette",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={Roulette} alt="" />
      ),
      path: "/roulette",
    },
  ];
  const HiddenScroll = styled(Box)`
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  `;
  return (
    <>
      {gameNav && (
        <div
          onMouseOver={() => setGameNav(true)}
          onMouseOut={() => setGameNav(false)}
        >
          <HiddenScroll
            sx={{
              position: "fixed",
              top: "8.5%",
              right: "0",
              left: "20%",
              width: "15%",
              height: "1000px",
              background: "#202447",
              borderRadius: "8px",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {sideData?.map((item) => (
              <NavLink>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "13px 44px 13px 20px",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#ffffff",
                      paddingLeft: "20px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </NavLink>
            ))}
          </HiddenScroll>
        </div>
      )}
      <Box sx={{ mt: "10px", height: "auto" }}>
        <NavLink
          style={({ isActive }) => (isActive ? activeMenuStyle : menuStyle)}
          to={item.path}
          onClick={item.subNav && showSubnav}
        >
          {/* <Box
            sx={{
              // background: 'rgba(95, 95, 111, 0.6)',
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "5px",
              },
              height: "46px",
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          > */}
          {/* <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                marginLeft: "15px",
              }}
            > */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            {item.icon}
            <Typography
              noWrap
              sx={{
                color: "#BDBDBD",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              {item.title}
            </Typography>
          </Box>
          {/* </Box> */}

          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
          {/* </Box> */}
        </NavLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <div
                onMouseOver={() => gameHandler(item.title)}
                onMouseOut={() => setGameNav(false)}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive ? subMenuActiveStyle : subMenuStyle
                  }
                  to={item.path}
                  key={`key${index}`}
                >
                  {/* <Box
                    sx={{
                      paddingLeft: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,

                      // position:'relative',
                      // marginBottom:"20px",

                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "5px",
                      },
                      height: "60px",
                    }}
                  > */}
                  {/* <Box sx={{position:'absolute',right:"40px"}}>
                  <Typography>thhdhhf</Typography>
                </Box> */}
                  {item.icon}
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      flexGrow: 1,
                      marginLeft: "10px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.iconOpened && item.iconOpened}
                  {/* </Box> */}
                </NavLink>
              </div>
            );
          })}
      </Box>
    </>
  );
};

export default SubMenu;
