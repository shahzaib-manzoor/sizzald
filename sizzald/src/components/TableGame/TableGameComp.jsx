import { Box, Typography, IconButton } from "@mui/material";
import DetailedCard from "../../ui-components/DetailCard";
import Network from "../../ui-components/Network";
import Carousal from "../Picks/Carousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function TableGameComp({ sliderTwo, settingCardTwo }) {
  return (
    <Box sx={{  padding: { xs: "0px 20px", md: "0px 20px" },}}>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            // padding: { xs: "10px 25px", md: "30px 28px" },
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
          <Box sx={{ padding: "0px 10px" }}>
            <Typography
              sx={{ color: "rgba(52, 53, 89, 1)", paddingLeft: "17px",fontSize:'15px',fontWeight:"5600" }}
              variant="h6"
            >
              <Typography sx={{ color: "rgba(255, 107, 44, 1)",paddingRight:"8px",fontSize:'15px',fontWeight:"500" }} variant="span">
                {" "}
                20
              </Typography>
              / 1050
            </Typography>
            <Box
              sx={{
                background: "rgba(52, 53, 89, 1)",
                borderRadius: "3px",
                height: "5px",
                width: "100px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  borderRadius: "3px",
                  background: "rgba(255, 107, 44, 1)",
                  position: "absolute",
                  height: "5px",
                  top: 0,
                  left: 0,
                  width: "15%",
                }}
              ></Box>
            </Box>
          </Box>
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

export default TableGameComp;
