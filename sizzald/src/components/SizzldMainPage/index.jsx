// import React from 'react'

import { Box, Button, styled, Typography } from '@mui/material';
import lodu from '../../assets/lodu.svg';
import sizzldGameSecond from '../../assets/sizzldGameSecond.svg';
import sizzledGameThree from '../../assets/sizzledGameThree.svg';
import sizzldGameFour from '../../assets/sizzldGameFour.svg';
import sizzldGameFive from '../../assets/sizzldGameFive.svg';
import sizzldGameSix from '../../assets/sizzldGameSix.svg';
import sizzldGameSeven from '../../assets/sizzldGameSeven.svg';
import Image from 'mui-image';
import SizzaldComp from "./SizzaldComp"

const Index = () => {
  // const [open,setOpen]=useState()
  const sizzldData = [
    {
      image: lodu,
    },
    {
      image: sizzldGameSecond,
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
      image: sizzldGameSix,
    },
    {
      image: sizzldGameSeven,
    },
  ];

  const typography = {
    fontSize: '21px',
    padding:"0px 0px",
    fontWeight: 700,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
 
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
  const flex = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: { xs: 0, sm: 2, md: 2, lg: 3, xl: 0 },
  };
  const flex2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const sliderTwo8 = React.useRef(null);
  var settingCardTwo = {
    slidesToShow: 6,
    rows: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
  };
  return (
    <Box sx={{ width: '100%', }}>
      <Typography sx={typography}> Sizzld Top Games </Typography>
      <Box
        sx={{
          mb: '20px',
          paddingLeft: { xs: '0px', sm: '0px', lg: '20px', xl: '0px' },
        }}
      >
        <Box sx={flex}>
          {sizzldData.map((data) => {
            console.log('data', data);
            return (
              <Box sx={flex2}>
                <Image src={data.image}></Image>,
                <Button sx={button}>Play</Button>
              </Box>
            );
          })}
        </Box>
      </Box >
      <SizzaldComp sliderTwo={sliderTwo8} settingCardTwo={settingCardTwo}/>
    </Box>
    
  );
};

export default Index;
