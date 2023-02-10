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
import videoPoker from "../../assets/videoPoker_rounded.png";
import kenoMultiplyer from "../../assets/kenoMultoiplayer_rounded.png";
import mineIcon from "../../assets/mine.png"
import baccaratIcon from "../../assets/baccarat_rounded.png"
import ringOfFortune from "../../assets/ringOfFortune.png";
import blackJack from "../../assets/blackJack.png";
import hiloIcon from "../../assets/Hilo.png";
import classicDiceIcon from "../../assets/classicDice.png";
import wheelIcon from "../../assets/wheel.png";
import towerOfLegend from "../../assets/towerOfLegend.svg";
import { NavLink } from "react-router-dom";

const SubMenu = ({ item }) => {
  let subMenuStyle = {
    // paddingLeft: "45px",
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
    height: "46px",
    width: "inherit",
    paddingRight: "10px",
  };
  let subMenuActiveStyle = {
    textDecoration: "none",
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
    // paddingLeft: "45px",
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
    height: "46px",
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
    padding: item.subNav ? "0px 17px" : "0px 25px",
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
    padding: item.subNav ? "0px 17px" : "0px 25px",
    background: "rgba(255, 255, 255, 0.1)",
    textDecoration: "none",
    color: "white",
    width: "inherit",
    // "& .MuiBox-root .css-16j6ze0-MuiTypography-root ": {
    //   fontWeight: '600 !important'
    // }

  };
  const activeTypography = {
    color: '#FFFFFF',
    fontSize: "18px",
    fontWeight: 600,
    textTransform: "capitalize",
    flexGrow: 1,
    marginLeft: "10px",
  };
  const notActiveTypography = {
    color: '#FFFFFF',
    fontSize: "18px",
    fontWeight: 400,
    textTransform: "capitalize",
    flexGrow: 1,
    marginLeft: "10px",
  };

  const [gameNav, setGameNav] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const gameHandler = (title) => {
    if (title === "Sizzld Games") {
      setGameNav(true);
    } else {
      // console.log("not sizzld");
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
      title: "Video Poker",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={videoPoker}
          alt=""
        />
      ),
      path: "/limbo",
    },
    {
      title: "Keno Multiplayer",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={kenoMultiplyer}
          alt=""
        />
      ),
      path: "/crash",
    },

    {
      title: "Mine",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={mineIcon}
          alt=""
        />
      ),
      path: "/keno",
    },
    {
      title: "Baccarat",
      icon: (
        <img
          style={{ height: "32px", width: "32px" }}
          src={baccaratIcon}
          alt=""
        />
      ),
      path: "/hashdice",
    },
    {
      title: "Ring Of Fortune",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={ringOfFortune} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Blackjack",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={blackJack} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Hilo",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={hiloIcon} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Classic Dice",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={classicDiceIcon} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Wheel",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={wheelIcon} alt="" />
      ),
      path: "/roulette",
    },
    {
      title: "Tower Of Legend",
      icon: (
        <img style={{ height: "32px", width: "32px" }} src={towerOfLegend} alt="" />
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              
              left: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "22%",
                xl: "18%",
              },
              width: "15%",
              height: "100vh",
              minHeight:'100vh',
              background: "rgba(43, 45, 80, 1)",
              borderRadius: "8px",
              overflowX: "hidden",
              overflowY: "auto",
              // paddingTop: "20px",
              // paddingBottom: "80px",
              // marginBottom: "40px",
              "&:lastChild": {
                marginBottom: "50px",
                color: "red",
              },
            }}
          >
            {sideData?.map((item, index) => (
              <NavLink style={{ textDecoration: "none" }} to={item.path}>
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
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: '#ffffff',
                      paddingLeft: "10px",
                      transition: "all .3s",
                      "&:hover": {
                        fontSize: "20px",
                      },
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
          to={item.path ? item.path : ""}
          onClick={item.subNav && showSubnav}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
           <img src={item.icon}></img>
            <Typography
              noWrap
              // style={({ isActive }) => isActive ? activeTypography : notActiveTypography}
              sx={{
                 
                // color: "#BDBDBD",
                fontFamily: 'Poppins',
                color: item.title ==="vip Club" ? '#FBB315':'#FFFFFF',
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: item.path === window.location.pathname ? 600 :item.title ==="vip Club"?900: 400,
                textDecoration: "none",
                fontStyle:item.title ==="vip Club"?'italic': 'normal'
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
                key={`key${index}`}
                onMouseOver={() => gameHandler(item.title)}
                onMouseOut={() => setGameNav(false)}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { ...subMenuActiveStyle, paddingLeft: item?.title === "Sizzld Games" ? "38px" : "45px" } : { ...subMenuStyle, paddingLeft: item?.title === "Sizzld Games" ? "38px" : "45px" }
                  }
                  to={item.path}
                  key={`key${index}`}
                >
                 <img src={item.icon}></img>
                  <Typography

                    sx={{
                      color:'#BDBDBD',
                      fontFamily: 'Poppins',
                      fontSize: "16px",
                      fontWeight:item.path === window.location.pathname ? 600 : 400,
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
