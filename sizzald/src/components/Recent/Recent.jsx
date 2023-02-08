import { Box, Typography, IconButton } from "@mui/material";
import DetailedCard from "../../ui-components/DetailCard";
import Network from "../../ui-components/Network";
import Carousal from "../Picks/Carousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Recent({ sliderTwo, settingCardTwo }) {
  return (
    <Box sx={{padding:"0px 20px"}}>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            // padding: { xs: "10px 25px", md: "30px 33px" },
            display: "flex",
            justifyContent: "space-between",
            padding:"10px 8px"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "17px" },
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
                height: { sx: "35px", md: "35px" },
                width: { sx: "35px", md: "35px" },
              }}
              onClick={() => sliderTwo?.current?.slickPrev()}
            >
              <KeyboardBackspaceIcon
                sx={{ fontSize: { xs: "16px", md: "19px" } }}
              />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                background: "#FFFFFF33",
                height: { sx: "35px", md: "35px" },
                width: { sx: "35px", md: "35px" },
              }}
              onClick={() => sliderTwo?.current?.slickNext()}
            >
              <ArrowRightAltIcon
                sx={{ fontSize: { xs: "16px", md: "19px" } }}
              />
            </IconButton>
          </Box>
        </Box>
        <Carousal sliderTwo={sliderTwo} settingCardTwo={settingCardTwo} />
      </Box>
      <DetailedCard />
      <Network />
    </Box>
  );
}

export default Recent;
