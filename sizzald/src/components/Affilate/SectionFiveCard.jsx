// import React from 'react'
import { Box, Typography, Card } from '@mui/material';
import price from '../../assets/price.svg';
import fiveGold from '../../assets/fiveGold.svg';
const SectionFiveCard = () => {
  const typo = {
    fontSize: '30px',
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: '40px',
    color: '#ffffff',
    textTransform: 'uppercase',
    paddingTop: '30px',
    paddingBottom:'30px'
  };
  const typography = {
    fontSize: '30px',
    fontweight: 400,
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Poppins',
    // paddingTop: '40px',
    paddingLeft: '20px',
   
  };
  const typography2 = {
    fontSize: '30px',
    fontweight: 400,
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Poppins',
    // paddingTop: '40px',
    paddingLeft: '4px',
    // paddingBottom:'30px'
  };
  return (
    <Box>
      <Typography sx={typo}> REWARDS SENT TO-DATE</Typography>
      {/* main box */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* first card */}
        <Card
          sx={{
            width: '50%',
            background: 'rgba(43, 45, 80, 0.6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '250px',
            borderRadius:'8px'
          }}
        >
          <Box>
            <Typography sx={typography}>
              USD rewards sent <Typography sx={typography2}>to-date</Typography>
            </Typography>
            <Box
              sx={{
                width: '215px',
                height: '63px',
                background: '#191A40',
                borderRadius: '8px',
                marginLeft: '28px',
                marginTop: '20px',
              }}
            >
              <Typography
                sx={{
                  color: '#FBB315',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '0px',
                  textAlign:'center',
                  paddingTop:'30px'
                }}
              >
                {' '}
                $1,166,132.50
              </Typography>
            </Box>
          </Box>
          <Box sx={{paddingRight:'30px'}}>
            <img src={price} style={{ objectFit: 'contain' }}></img>
          </Box>
        </Card>
        {/* first card end */}
        {/* second card */}
        <Card
          sx={{
            width: '50%',
            background: 'rgba(43, 45, 80, 0.6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '250px',
            borderRadius:'8px'
          }}
        >
          <Box>
            <Typography sx={typography}>
            Commission sent<Typography sx={typography2}>to-date</Typography>
            </Typography>
             
            <Box
              sx={{
                width: '215px',
                height: '63px',
                background: '#191A40',
                borderRadius: '8px',
                marginLeft: '28px',
                marginTop: '20px',
              }}
            >
              <Typography
                sx={{
                  color: '#FBB315',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '0px',
                  textAlign:'center',
                  paddingTop:'30px'
                }}
              >
                {' '}
                $1,166,132.50
              </Typography>
            </Box>
          </Box>
          <Box sx={{paddingRight:'30px'}}>
            <img src={fiveGold} style={{ objectFit: 'contain' }}></img>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SectionFiveCard;
