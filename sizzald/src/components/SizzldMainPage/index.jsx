// import React from 'react'

import { Box, Button, styled, Typography } from '@mui/material';
import lodu from '../../assets/lodu.svg';
import sizzldGameSecond from '../../assets/sizzldGameSecond.svg';
import sizzledGameThree from '../../assets/sizzledGameThree.svg';
import sizzldGameFour from '../../assets/sizzldGameFour.svg';
import sizzldGameFive from '../../assets/sizzldGameFive.svg';
import sizzldGameSix from '../../assets/sizzldGameSix.svg';
import sizzldGameSeven from '../../assets/sizzldGameSeven.svg';

const Index = () => {
  const sizzldData = [
    {
      image: lodu,
    },
    {
      image:sizzldGameSecond,
    },
    {
      image: sizzledGameThree,
    },
    {
      image: sizzldGameFour,
    },
    {
      image: sizzldGameFive,
    },
    {
      image:sizzldGameSix,
    },
    {
      image: sizzldGameSeven,
    },
  ];

  const typography = {
    fontSize: '30px',
    fontWeight: 700,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  };
  const button = {
    width: '110px',
    height: '39px',
    background: '#FFC848',
    borderRadius: '62px',
    color: '#FFFFFF',
    mt: '-30px',
    // marginLeft: '20px',
  };
  return (
    <Box>
      <Typography sx={typography}> Sizzld Top Games </Typography>
      <Box sx={{mb:'20px'}}>
        <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
          {sizzldData.map((data) => {
            console.log('data', data);
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img src={data.image}></img>,<Button sx={button}>Play</Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
