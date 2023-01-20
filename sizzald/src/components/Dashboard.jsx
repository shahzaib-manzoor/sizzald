import { Typography, Box, IconButton } from "@mui/material";
import CustomCard from "../ui-components/CustomCard";
import { useRef } from "react";
import CustomCarousal from "../ui-components/CustomCarousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomCardTwo from "../ui-components/CustomCardTwo";
export default function Dashboard() {
  const slider = React.useRef(null);

  return (
    <section   className="!bg-clBlueContainer " >
      <Box
        sx={{
          textAlign: "right",
          paddingRight: "25px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          PROMOTIONS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal carousalRef={slider}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </CustomCarousal>
      <Box>
        <CustomCardTwo />
      </Box>
    </section>
  );
}
