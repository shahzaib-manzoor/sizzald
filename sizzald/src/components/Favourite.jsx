// import React from 'react'
import frame from "../assets/frame.png";
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
            height: { xs: "300px", md: "500px" },
            background: "rgba(43, 45, 80, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "45%" }} src={frame} alt="" />
        </Box>
      </Box>
      <DetailedCard />
      <Network />
    </Box>
  );
};

export default Favourite;
