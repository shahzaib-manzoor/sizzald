import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography, Box, Button } from "@mui/material";
import headerPopup1 from "../../../assets/headerPopup1.svg";
import headerPopup2 from "../../../assets/headerPopup2.svg";
import headerPopup3 from "../../../assets/headerPopup3.svg";
import * as style from "./style";
import emoji from "../../../assets/emoji.png";
import IconButton from "@mui/material/IconButton";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          position: "absolute",
          top: "7%",
          left: "5%",
          width: "85%",
          height: "90%",
          background: "rgba(43, 45, 80, 0.8)",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            padding: "10px 12px",
            background: "rgba(14, 6, 61, 0.9)",
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 800,
              lineHeight: "40px",
              letterSpacing: "1.2px",
              textAlign: "left",
              textTransform: "uppercase",
            }}
            variant="h6"
          >
            Sports
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img style={{ height: "25px" }} src={headerPopup1} alt="" />
            <img
              style={{ marginLeft: "10px", height: "25px" }}
              src={headerPopup2}
              alt=""
            />
            <img
              style={{ marginLeft: "10px", height: "25px" }}
              src={headerPopup3}
              alt=""
            />
          </Box>
        </Box>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box>
          <Box
            sx={{
              width: "95%",
              textAlign: "center",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <input
              style={{
                background: "rgba(1, 2, 47, 0.8)",
                boxShadow: "0px 0px 6px 0px rgba(95, 95, 111, 0.8)",
                outline: "none",
                border: "none",
                width: "100%",
                height: "55px",
                borderRadius: "6px",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 400,
              }}
              type="text"
              placeholder="   Type..."
            />
            <IconButton
              sx={{
                position: "absolute",
                right: "1%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              aria-label="delete"
            >
              <img style={{ height: "25px" }} src={emoji} alt="" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
