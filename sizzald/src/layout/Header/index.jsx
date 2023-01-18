import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import logo from "../../assets/sizzld-logo.png";
import menuIcon from "../../assets/Vector.png";
import Avatar from "@mui/material/Avatar";
import MessageIcon from "@mui/icons-material/Message";
import "./style/style.css";
import avator from "../../assets/avator.png";
import bitcoin from "../../assets/bitcoin.png";
import wallet from "../../assets/wallet.png";
import arrowDown from "../../assets/arrow-down.png";

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
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
            <MailIcon />
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
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-clBlue">
          <IconButton className="alignment-flex" size="small" color="inherit">
            <img className="navMenu" src={menuIcon} alt="menu" />
          </IconButton>
          <IconButton size="large" color="inherit">
            <img className="navLogo" src={logo} alt="logo" />
          </IconButton>
          {/* <img src={logo} alt="" /> */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div
              className="grid  grid-cols-2  rounded-xl !bg-clwhite p-1"
              x-data="app"
            >
              <div>
                <input
                  type="radio"
                  name="option"
                  id="1"
                  className="peer hidden"
                  defaultChecked
                />
                <label
                  htmlFor="1"
                  className="px-5 py-2 block cursor-pointer select-none rounded-xl  text-center peer-checked:bg-clSky peer-checked:font-bold peer-checked:clLightPurple"
                >
                  Casino
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="2"
                  className="peer hidden"
                />
                <label
                  htmlFor="2"
                  className="px-5 py-2 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-clSky peer-checked:font-bold peer-checked:clLightPurple"
                >
                  Sport
                </label>
              </div>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search className="searchNav">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                className="inputNav"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 3 }} />
          <Box
            className="flex-nav "
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <IconButton
              className="!bg-clwhite !mx-1 !p-2"
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              className="!bg-clwhite !mx-1 !p-2"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              className="!bg-clwhite !mx-1 !p-2"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <MessageIcon />
              </Badge>
            </IconButton>
            <Button
              className="!bg-clwhite !rounded-3xl !mx-1"
              variant="contained"
              startIcon={<img className="w-4" src={bitcoin} alt="bitcoin" />}
              endIcon={
                <img
                  className="w-5 endIconNav"
                  src={arrowDown}
                  alt="dropdown"
                />
              }
            >
              BTC
            </Button>
            <Button
              className="!bg-clwhite !rounded-3xl !mx-1"
              variant="contained"
              startIcon={<img className="w-4" src={wallet} alt="wallet" />}
            >
              Wallet
            </Button>
            <Avatar className="avator !mx-1" alt="avator" src={avator} />
            <IconButton className="!text-white !mx-1" aria-label="avator-arrow">
              <img src={arrowDown} alt="" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
