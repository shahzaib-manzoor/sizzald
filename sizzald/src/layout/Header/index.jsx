import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
  Stack,
  Avatar,
  ButtonGroup,
} from "@mui/material";
import { useState, useEffect } from "react";
import * as style from "./style/style";
import searchIcon from "../../assets/searchIcon.png";
import EmailIcon from "@mui/icons-material/Email";
// import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/More";
import Message from "@mui/icons-material/Message";
// import logo from "../../assets/sizzld-logo.png";
import logo from "../../assets/logo1.png";

import avator from "../../assets/avator.png";
import bitcoin from "../../assets/bitcoin.png";
import wallet from "../../assets/wallet.png";
import arrowDown from "../../assets/arrow-down.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import navIcon from "../../assets/navIcon.png";
import GlobalChat from "./Popups/GlobalChat";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35ch",
    },
    [theme.breakpoints.up("xl")]: {
      width: "40ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  handleDrawer,
  handlemObileDrawer,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate("/");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    console.log("handleMobileMenuOpen");
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>prof</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={style.containerNav}>
      <AppBar
        sx={{
          // margin: "20px 10px",
          padding: "0px",
          // top: "20px",
          // left: "50%",
          // transform: "translateX(-50%)",
          // width: "99%",
          // borderRadius: "8px",
          // boxShadow: "0px 0px 6px #5F5F6F",
          backgroundColor: "rgba(43, 45, 80, 0.6) !important",
        }}
      >
        <Toolbar sx={style.Toolbar}>
          <IconButton size="large" color="inherit" onClick={handleDrawer}>
            <img src={navIcon} />
          </IconButton>
          <Box sx={{ flexGrow: 0.1 }} />
          <Stack sx={style.headerLogo}>
            <img src={logo} alt="logo" />
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={style.headerRadioButton}>
            <ButtonGroup
              sx={{
                borderRadius: "8px",
                border: "1px solid #2B2D50",
                marginLeft: "50px",
              }}
            >
              <Button
                sx={{
                  background: "#5842F4",
                  borderRadius: "8px",
                  width: { lg: "90px", xl: "129px" },
                  height: "47px",
                  color: "#ffffff",
                }}
              >
                Casino
              </Button>
              <Button
                sx={{
                  background: "#2B2D50",
                  borderRadius: "8px",
                  width: { lg: "90px", xl: "129px" },
                  height: "47px",
                  color: "#ffffff",
                  border: "1px solid #2B2D50",
                }}
              >
                {" "}
                sports
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={style.headerFlex}>
            <Search sx={style.headerBorderRadius}>
              <SearchIconWrapper>
                <img style={{ height: "18px" }} src={searchIcon} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                sx={style.headerInputHeight}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={style.headerFlexCenter}>
            <Stack sx={style.headerFlexResponsive}>
              <IconButton
                className="!bg-clwhite "
                sx={style.headerIcons}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <EmailIcon />
                </Badge>
              </IconButton>
              <IconButton
                className="!bg-clwhite "
                sx={style.headerIcons}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <GlobalChat />
              <Button
                className="!bg-clwhite"
                sx={style.headerButton}
                variant="contained"
                startIcon={
                  <img
                    sx={style.headerButtonIcon}
                    src={bitcoin}
                    alt="bitcoin"
                  />
                }
                endIcon={
                  <img
                    sx={style.headerButtonIcon}
                    src={arrowDown}
                    alt="dropdown"
                  />
                }
              >
                BTC
              </Button>
              <Button
                className="!bg-clwhite"
                sx={style.headerButton}
                variant="contained"
                startIcon={
                  <img src={wallet} sx={{ width: "20px" }} alt="bitcoin" />
                }
              >
                Wallet
              </Button>
            </Stack>
            <Avatar sx={style.avator} alt="avator" src={avator} />
            <IconButton
              className="!text-white "
              aria-label="avator-arrow"
              size="large"
              edge="end"
              // aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src={arrowDown} alt="" />
            </IconButton>
          </Box>
          <Box sx={style.headerDNone}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
