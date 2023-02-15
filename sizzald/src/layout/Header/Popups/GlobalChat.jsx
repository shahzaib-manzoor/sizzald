import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography, Box, Button, Avatar } from "@mui/material";
import headerPopup1 from "../../../assets/headerPopup1.svg";
import headerPopup2 from "../../../assets/headerPopup2.svg";
import headerPopup3 from "../../../assets/headerPopup3.svg";
import * as style from "./style";
import emoji from "../../../assets/emoji.png";
import IconButton from "@mui/material/IconButton";
import drop from "../../../assets/drop.svg";
import angle from "../../../assets/angle.svg";
import leave from "../../../assets/leave.svg";
import gif from "../../../assets/gif.svg";
import avator from "../../../assets/avator.svg";
import avator2 from "../../../assets/avator2.svg";
import { Badge } from "@mui/material";
import Message from "@mui/icons-material/Message";
import Input from "@mui/material/Input";
import award from "../../../assets/award.svg";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  let chat = [
    {
      name: "Zealous Michelsen",
      img: avator,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
    {
      name: "Zealous Michelsen",
      img: avator2,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
    {
      name: "Zealous Michelsen",
      img: avator,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
    {
      name: "Zealous Michelsen",
      img: avator,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
    {
      name: "Zealous Michelsen",
      img: avator2,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
    {
      name: "Zealous Michelsen",
      img: avator2,
      icon: "ok",
      level: "VIP 04",
      mention: "@SCAM_alert",
      message: "Fitting name for this place!",
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={style.chatContainer}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={style.chatSection}>
        <Box sx={style.chatHeadingContainer}>
          <Typography sx={style.chatHeading} variant="h6">
            Sports
          </Typography>
          <Box sx={style.chatImgTop}>
            <img style={style.chatImgsTop} src={headerPopup1} alt="" />
            <img style={style.chatImgsTop} src={headerPopup2} alt="" />
            <img style={style.chatImgsTop} src={headerPopup3} alt="" />
          </Box>
        </Box>
        <List sx={{ height: "70%", overflow: "auto" }}>
          {chat.map((chat, index) => (
            <ListItem key={index} disablePadding>
              <Box sx={style.chatMessage}>
                <Box>
                  <Avatar sx={style.chatMessageAvatar} src={chat.img} />
                  <Typography sx={style.chatLevel}>Vip 6</Typography>
                  <Box sx={{ transform: "translateY(-10px)" }}>
                    <img src={award} alt="" />
                    <img src={award} alt="" />
                    <img src={award} alt="" />
                    <img src={award} alt="" />
                    <img src={award} alt="" />
                  </Box>
                </Box>
                <Box>
                  <Typography sx={style.chatName}>{chat.name}</Typography>
                  <Typography sx={style.chatMention}>
                    <Typography sx={style.chatMessg} variant="span">
                      {chat.mention}
                    </Typography>
                    {chat.message}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={style.chatInputCont}>
          <Box sx={style.chatInputSection}>
            <Input
              sx={style.chatInput}
              disableUnderline={true}
              placeholder="  Type.."
            />
            <IconButton sx={style.emojiButton} aria-label="delete">
              <img style={style.emoji} src={emoji} alt="" />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "95%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <Box sx={style.chatImgBottom}>
              <img src={drop} alt="" />
              <img src={angle} alt="" />
              <img src={leave} alt="" />
            </Box>
            <img src={gif} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              marginLeft: { xs: "5px", md: "8px", lg: "10px", xl: "20px" },
              height: "40px",
              width: "40px",
              padding: { xs: "7px", md: "10px", lg: "12px", xl: "15px" },
              background: "rgba(255, 255, 255, 0.2)",
            }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Message />
            </Badge>
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: { backgroundColor: "#00000036", backdropFilter: "blur(9px)" },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
