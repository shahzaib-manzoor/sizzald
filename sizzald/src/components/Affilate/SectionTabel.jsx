// import React from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material';
import CallMadeIcon from "@mui/icons-material/CallMade";
import Tabel from './Tabel';

const SectionTabel = () => {
  const typo = {
    fontSize: '30px',
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: '40px',
    color: '#ffffff',
    textTransform: 'uppercase',
    paddingTop: '30px',
    paddingBottom: '30px',
  };
  return (
    <Box sx={{paddingBottom:'30px'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography sx={typo}> PLATFORM REAL-TIME REWARDS</Typography>
        <Button
                  sx={{
                    background: "rgba(1, 210, 97, 1)",
                    borderRadius: "50px",
                    boxShadow: "0px 4px 4px 0px rgba(5, 5, 5, 0.25)",
                    // marginTop: { sx: "10px", lg: "10px", xl: "30px" },
                    padding: "5px 10px",
                    height: "44px",
                    marginLeft: "7px",
                    fontFamily: "Poppins",
                    fontSize: { lg: "12px", xl: "18px" },
                    fontWeight: "700",
                    letterSpacing: "0.01em",
                    textAlign: "left",
                  }}
                  variant="contained"
                >
                  USD REWARD RULES
                  <IconButton sx={{ background: "white", marginLeft: "18px" }}>
                    <CallMadeIcon sx={{ fontSize: "10px" }} />
                  </IconButton>
                </Button>
      </Box>
      {/* main box flex */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* tabel */}

        <Box sx={{ width: '50%' }}>
          <Tabel />
        </Box>
        {/* second tabel */}
        <Box sx={{ width: '50%' }}>
          <Tabel />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTabel;
