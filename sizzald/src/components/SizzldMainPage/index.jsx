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
import DetailedCard from '../../ui-components/DetailCard';
import Network from '../../ui-components/Network';

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
    padding:"0px 8px",
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
    // padding:"0px 5px"
  };
  const flex2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const sliderTwo8 = React.useRef(null);
  var settingCardTwo = {
    slidesToShow: 6,
    rows: 5,
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
    <Box sx={{ width: '100%',padding:"0px 20px",boxSizing:"border-box" }}>
      <Typography sx={typography}> Sizzld Top Games </Typography>
      <Box>
        <Box sx={flex}>
          {sizzldData.map((data) => {
            console.log('data', data);
            return (
              <Box sx={flex2}>
                <img style={{width:"100%"}} src={data.image}/>,
                <Button sx={button}>Play</Button>
              </Box>
            );
          })}
        </Box>
      </Box >
      <SizzaldComp sliderTwo={sliderTwo8} settingCardTwo={settingCardTwo}/>
      <Box sx={{padding:"0px 20px"}}>
      <DetailedCard/>  
      <Network/>
      </Box>
      
    </Box>
    
  );
};

export default Index;
