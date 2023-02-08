// import React from 'react'
import frame from "../assets/Frame.png";
import { Box } from "@mui/material";
import DetailedCard from "../ui-components/DetailCard";
import Network from "../ui-components/Network";

const Favourite = () => {
  return (
    <Box  sx={{  padding: { xs: "10px 20px", md: "20px 20px" }}}>
      <Box >
        <Box
          sx={{
            borderRadius: "8px",
            height: { xs: "300px", md: "500px", lg: "550px" },
            background: "rgba(43, 45, 80, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           margin:"0px 8px"
          }}
        >
          <img style={{height:"60%"}} src={frame} alt="" />
        </Box>
      </Box>
      <DetailedCard />
      <Network />
    </Box>
  );
};

export default Favourite;
