import { Box, Typography, IconButton } from "@mui/material";
import DetailedCard from "../../ui-components/DetailCard";
import Network from "../../ui-components/Network";
import Carousal from "../Picks/Carousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function FeatureBuyInComp({ sliderTwo, settingCardTwo }) {
  return (
    <Box sx={{  padding: "0px 20px"}}>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            padding:"10px 8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
              gap: "10px",
              width: "50%",
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
              component="h6"
            >
              NEW RELEASES
            </Typography>
          </Box>
        </Box>
        <Carousal sliderTwo={sliderTwo} settingCardTwo={settingCardTwo} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
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
              marginLeft: "8px",
            }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", md: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
        <DetailedCard />
      <Network />
    </Box>
  );
}

export default FeatureBuyInComp;
