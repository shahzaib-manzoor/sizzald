// import React from 'react'

import { Box, Stack, Typography, Button, ButtonGroup } from '@mui/material';
import limboBack from '../../../assets/limboBack.svg';
import amount from '../../../assets/amount.svg';
import Rp from '../../../assets/Rp.svg';

const Limbo = () => {
  return (
    <Box>
      {/* first sectionn */}
      <Stack
        sx={{
          paddingLeft: '25px',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingTop: '22px',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: 'Poppins',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          Sizzld Originals
        </Typography>
        <img src={limboBack} style={{ paddingRight: '15px' }}></img>
      </Stack>
      {/* second section */}
      <Box sx={{ paddingLeft: '20px' }}>
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '40px',
            textTransform: 'uppercase',
            color: '#ffffff',
            letterSpacing: '1px',
            paddingLeft: '10px',
            paddingTop: '27px',
            paddingBottom: '5px',
          }}
        >
          Limbo
        </Typography>
        <Box
          sx={{
            width: '99%',
            background: 'rgba(43, 45, 80, 0.6)',
            borderRadius: '8px',
            //   paddingLeft: '20px',
            height: '700px',
            display: 'flex',
          }}
        >
          {/* first section of limbo second part */}
          <Box
            sx={{
              width: '30%',
              background:
                'linear-gradient(180deg, rgba(255, 124, 57, 0.3) 0%, rgba(255, 124, 57, 0.18) 50%, rgba(255, 124, 57, 0.12) 100%)',
              height: '400px',
            }}
          >
            {/* button */}

            <ButtonGroup
              sx={{
                borderRadius: '8px',
                // border: '1px solid #2B2D50',
                mt: '30px',
                marginLeft: '15px',
              }}
            >
              <Button
                sx={{
                  background: '#2B2D50',
                  borderRadius: '8px',
                  width: '129px',
                  height: '47px',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                Manual
              </Button>
              <Button
                sx={{
                  background: '#5842F4',
                  borderRadius: '8px',
                  width: '129px',
                  height: '47px',
                  color: '#ffffff',
                  border: '1px solid #2B2D50',
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                {' '}
                auto
              </Button>
            </ButtonGroup>
            {/* second section amount */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '30px',
                }}
              >
                <Box sx={{ display: 'flex', width: '60%', marginLeft: '15px' }}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: 'Poppins',
                      color: '#D2D2D2',
                      textTransform: 'capitalize',
                    }}
                  >
                    amount
                  </Typography>
                  <img src={amount} style={{ paddingLeft: '15px' }}></img>
                </Box>
                <Typography
                  sx={{
                    color: '#D2D2D2',
                    fontSize: '16px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    lineHeight: '22px',
                    paddingRight: '10px',
                  }}
                >
                  {' '}
                  0.00112791 ZAR
                </Typography>
              </Box>
              <Box
                sx={{
                  background: '#1A1C43',
                  width: '92%',
                  height: '72px',
                  borderRadius: ' 6.58745px',
                  marginLeft: '15px',
                  marginTop: '10px',
                  justifyContent: 'space-between',
                  display: 'flex',
                }}
              >
                {/* first box */}
                <Box sx={{ display: 'flex', alignItems: 'center',paddingLeft:'15px' }}>
                  <img src={Rp}></img>
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontSize: '18px',
                      fontWeight: 500,
                      fontFamily: 'Poppins',
                      paddingLeft:'12px'
                    }}
                  >
                    1.0000
                  </Typography>
                </Box>
                <Box>
                    
                </Box>
              </Box>
            </Box>
          </Box>
          {/* first box end */}
          {/* second box of section limbo second part */}
          <Box sx={{ width: '70%' }}></Box>
          <Typography>this is our second box</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Limbo;
