import { Typography, Box, IconButton } from "@mui/material";
import CustomCard from "../ui-components/CustomCard";
import { useRef } from "react";
// import cardImage from "../assets/Slider1.png";
import CustomCarousal from "../ui-components/CustomCarousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Dashboard() {
  const slider = React.useRef(null);

  return (
    <section className="!bg-clBlueContainer">
      <Box
        sx={{ textAlign: "right", paddingRight: "25px", paddingTop: "30px" }}
      >
        <IconButton
          className="!bg-clIconBackground"
          sx={{ color: "white", marginRight: "8px" }}
          onClick={() => slider?.current?.slickPrev()}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <IconButton
          className="!bg-clIconBackground"
          sx={{ color: "white" }}
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowRightAltIcon />
        </IconButton>
      </Box>
      <CustomCarousal carousalRef={slider}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </CustomCarousal>
    </section>
  );
}
