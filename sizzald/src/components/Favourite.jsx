// import React from 'react'
import frame from "../assets/Frame.png";
import { Box } from "@mui/material";
import DetailedCard from "../ui-components/DetailCard";
import Network from "../ui-components/Network";

const Favourite = () => {
  return (
    <Box>
      <Box sx={{ padding: "10px 28px" }}>
        <Box
          sx={{
            borderRadius: "8px",
            height: { xs: "300px", md: "500px" ,lg:"650px"},
            background: "rgba(43, 45, 80, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{xs: {width: "45%" },lg:{width:"30%"}}} src={frame} alt="" />
        </Box>
      </Box>
      <DetailedCard />
      <Network />
    </Box>
  );
};

export default Favourite;
