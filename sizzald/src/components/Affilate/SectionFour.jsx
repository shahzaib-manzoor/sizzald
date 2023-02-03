// import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import affilateRocket from '../../assets/affilateRocket.svg';
const SectionFour = () => {
  const typography = {
    fontSize: '30px',
    fontweight: 400,
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Poppins',
    paddingTop: '40px',
    paddingLeft: '20px',
  };
  const typography2 = {
    fontSize: '30px',
    fontweight: 400,
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Poppins',
    paddingLeft: '20px',
    paddingBottom: '30px',
  };
  const typography3 = {
    fontSize: '18px',
    fontweight: 700,
    lineHeight: '26px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Poppins',
    paddingLeft: '20px',
    // paddingBottom: '30px',
  };
  const mainBox = {
    backgroundImage: `url(${affilateRocket})`,
    width: '100%',
    height: '300px',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    mt:"30px"
  };
  return (
    <div>
      <Box sx={mainBox}>
        <Container maxWidth='xl'>
          <Box>
            <Typography sx={typography}>you have any</Typography>
            <Typography sx={typography2}>special offers</Typography>
            <Typography sx={typography3}>
              If you have any special offers regarding cooperation or you have
              access to a large audience.{' '}
              <Typography>
                Please feel free to contact our manager by Telegram. We're happy
                to discuss individual terms of
              </Typography>
              the affiliate program tailored to you.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default SectionFour;
