// import React from 'react'

import { Avatar, Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallMadeIcon from '@mui/icons-material/CallMade';
import equality from '../../assets/equality.svg';
import frame2 from '../../assets/frame2.svg';
import { Container } from '@mui/system';

const GameId = () => {
  return (
    // <Container maxWidth='xl'>
    <Box
      sx={{
        height: '380px',
        width: '99%',
        background: "rgba(43, 45, 80, 0.6)",
        mt: '40px',
        borderRadius: '8px',
       

      }}
    >

     
      <Box
        sx={{
          background: '#14163D',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          height: '65px',
          alignItems: 'center',
          boxShadow:" 0px 0px 6px 0px rgba(95, 95, 111, 1)",
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}
        >
          <Typography
            sx={{ color: '#ffffff', fontSize: '16px', fontFamily: 'Poppins' }}
          >
            Game ID
          </Typography>
          <Box
            sx={{
              background: '#01022F',
              borderRadius: '50px',
              border: '(255, 255, 255, 0.2)',
              marginLeft: '20px',
              width: '190px',
            }}
          >
            {/* first avatar box */}
            <Box sx={{ display: 'flex', boxShadow:"0px 0px 6px 0px rgba(95, 95, 111, 1)",borderRadius:"19px"    }}>
              <Box>
                <Avatar sx={{ background:" rgba(255, 255, 255, 0.2)" }}>
                  <ArrowBackIcon sx={{fontSize:"15px"}}></ArrowBackIcon> 

                </Avatar>
              </Box>
              {/* second box of num */}
              <Box
                sx={{
                  width: '110px',
                  borderRadius: '32.5px',
                  background: '#2B2D50',

                }}
              >
                <Typography
                  sx={{
                    color: '#BCBCBC',
                    fontSize: '16px',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    textAlign: 'center',
                    mt: '10px',
                  }}
                >
                  0986470
                </Typography>
              </Box>
              {/* third box second avatar */}
              <Box>
                <Avatar sx={{background:" rgba(255, 255, 255, 0.2)"}} >
                  <ArrowForwardIcon sx={{fontSize:"15px"}}></ArrowForwardIcon>
                </Avatar>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Avatar sx={{ background: '#01022F' }}>
              <ArrowForwardIcon sx={{fontSize:"23px"}}></ArrowForwardIcon>
            </Avatar>
          </Box>
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: 'Poppins',
              marginLeft: '20px',
            }}
          >
            1/9/2023, 7:55:00 PM
          </Typography>
        </Box>

        {/* second div */}
        <Box sx={{ display: 'flex', gap: 3, paddingRight: '20px' }}>
          <Button
            sx={{
              background: '#A77738',
              width: '100%',
              height: '44px',
              borderRadius: '50px',
              color: '#ffffff',
              textTransform: 'capitalize',
              fontWeight:"700",
              padding:"0 10px",
              fontSize:"14px",
              boxShadow:" 0px 0px 6px 0px rgba(95, 95, 111, 1)",
            }}
          >
            {' '}
            Buy ticket now{' '}
            <Avatar sx={{ background: '#ffffff', marginLeft: '20px',height:"25px",width:"25px" }}>
              <CallMadeIcon sx={{ color: '#A77738',fontSize:"10px" }}></CallMadeIcon>
            </Avatar>
          </Button>
          <Box sx={{ mt: '5px' }}>
            <img src={equality}></img>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt:"35px"
        }}
      >
        <img src={frame2}></img>
        <Typography
          sx={{
            color: '#71739A',
            fontSize: '18px',
            fontWeight: 500,
            fontFamily: 'Poppins',
            lineHeight: '40px',
            textTransform: 'capitalize',
          }}
        >
          Have no ticket right now!
        </Typography>
      </Box>
    </Box>
      // </Container>
  );
};

export default GameId;
