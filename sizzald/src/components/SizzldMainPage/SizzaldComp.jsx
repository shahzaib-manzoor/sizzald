import { Box, Typography, IconButton } from "@mui/material";
// import DetailedCard from "../../ui-components/DetailCard";
// import Network from "../../ui-components/Network";
import Carousal from "../Picks/Carousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SizzaldComp({ sliderTwo, settingCardTwo }) {
  return (
    <Box sx={{ margin: "28px 0px" }}>
  <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", md: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "24px" },
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          RECENT BIG WINS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "white",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", md: "45px" },
              width: { sx: "35px", md: "45px" },
            }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", md: "23px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              background: "#FFFFFF33",
              height: { sx: "35px", md: "45px" },
              width: { sx: "35px", md: "45px" },
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
export default SizzaldComp;
