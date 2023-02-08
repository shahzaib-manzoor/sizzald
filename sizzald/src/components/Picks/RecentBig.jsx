import { Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Carousal from "./Carousal";
function RecentBig({ sliderTwo, settingCardTwo }) {
  return (
    <Box  >
      <Box
        sx={{
          textAlign: "right",
          // padding: { xs: "10px 8px", md: "10px 8px" },
          display: "flex",
          justifyContent: "space-between",
          padding:"10px 8px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "17px" },
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Picks For You
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "white",
              marginRight: "15px",
              background: "#FFFFFF33",
              height: { sx: "30px", md: "35px" },
              width: { sx: "30px", md: "35px" },
            }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", md: "18px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              background: "#FFFFFF33",
              height: { sx: "30px", md: "35px" },
              width: { sx: "30px", md: "35px" },
            }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", md: "23px" } }} />
          </IconButton>
        </Box>
      </Box>
      <Carousal sliderTwo={sliderTwo} settingCardTwo={settingCardTwo} />
    </Box>
  );
}

export default RecentBig;

 