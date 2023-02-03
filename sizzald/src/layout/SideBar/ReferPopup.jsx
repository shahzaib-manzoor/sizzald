import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assets/close.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 530,
  //   bgcolor: "background.paper",
 
  background: "rgba(14, 6, 61, 0.3)",
  boxShadow: "1px 1px 10px rgba(255, 1, 62, 0.18)",
  backdropFilter: "blur(50px)",
  p: 5,
  borderRadius: "8px",
  //   border: "none",
  outline: "none",
  //   border: "2px solid",

  //   borderImageSource:
  //     "linear-gradient(235.94deg, #FF6B2C 16.21%, #BF4B5A 47.23%, #B102CD 94.02%)",
};

export default function BasicModal({ handleOpen, handleClose, open }) {
  const [copy,setCopy]=useState("please copy ")

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(copy);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "-5%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              src={close}
              alt=""
              onClick={handleClose}
            />
            <Typography
              sx={{
                color: "#ffffff",
                background: "rgba(14, 6, 61, 0.3)",
                fontFamily: "Poppins",
                fontSize: "25px",
                fontStyle: "italic",
                fontWeight: 800,
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "center",
                textTransform: "uppercase",
                // backdropFilter: "blur(50px)",
                borderRadius: "6.58745px",
                padding: "10px 15px",
              }}
              component="span"
            >
              Refer a friend
            </Typography>
          </Box>
          <Box sx={{ padding: "38px 0px" }}>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                fontFamily: "Poppins",
                fontSize: "27px",
                fontWeight: 800,
                lineHeight: "25px",
                letterSpacing: "1px",
                textAlign: "left",
                color: "#ffff",
                fontStyle: "italic",
              }}
              variant="h2"
            >
              REFER A FRIEND AND GET
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Poppins",
                fontSize: "27px",
                fontWeight: 800,
                lineHeight: "25px",
                letterSpacing: "1px",
                textAlign: "left",
                color: "rgba(251, 179, 21, 1)",
                fontStyle: "italic",
              }}
            >
              1,000 USD
              <Typography
                sx={{ color: "rgba(3, 251, 117, 1)", paddingLeft: "10px" }}
                variant="span"
              >
                + 15%
              </Typography>
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Poppins",
                fontSize: "27px",
                fontStyle: "italic",
                fontWeight: 800,
                lineHeight: "25px",
                letterSpacing: "1px",
                textAlign: "left",
                color: "#ffff",
              }}
            >
              COMMISSION
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
                color: "rgba(3, 251, 117, 1) ",
              }}
            >
              Invite friends, earn money.
            </Typography>
          </Box>
          <Typography
            sx={{
              paddingTop: "20px",
              paddingBottom: "10px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontweight: 600,
              lineheight: "40px",
              letterspacing: "1px",
              textAlign: "left",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
            variant="h6"
          >
            Share your referral link:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(14, 6, 61, 0.6)",
              padding: "5px",
              borderRadius: "7px",
            }}
          >
            <Typography sx={{ color: "white", paddingLeft: "10px" }}>
             {copy}
            </Typography>
            <Button
              sx={{ background: " rgba(14, 6, 61, 1)" }}
              variant="contained"
              onClick={handleCopyToClipboard}
            >
              Copy Link
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
