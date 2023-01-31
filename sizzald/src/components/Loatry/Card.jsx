import { Box, Container, Typography } from '@mui/material';
import ticket from '../../assets/ticket.svg';
import second from '../../assets/secondCard.svg';
import third from '../../assets/thirdCard.svg';
// import React from 'react'

const Card = () => {
  return (
    <Box sx={{ marginBottom: '30px', mt: '40px',width:'99%' }}>
        {/* <Container maxWidth='xl'> */}

       
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '30px',
          fontWeight: 700,
          fontFamily: 'Poppins',
          lineHeight: '40px',
          textTransform:'uppercase'
         
        }}
      >
        how to play
      </Typography>
      {/* main card box */}
      <Box sx={{ mt: '20px' ,display:'flex',gap:2}}>
        {/* first card */}
        <Box
          sx={{
            backgroundImage: `url(${ticket})`,
            width: {xs:'100%',sm:'30%',md:'30%',lg:"30%",xl:'33%'},
            height: '221px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius:{xs:"15px",sm:'15px',md:'15px',lg:'18px',xl:'20px'}
            
          }}
        >
          <Container sx={{paddingTop:'50px'}} >
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 700,
                fontFamily: 'Poppins',
                textTransform: 'uppercase',
                paddingBottom:'15px'
              }}
            >
              HOW TO PLAY
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  textTransform: 'uppercase',
                  lineHeight: '18px',
                }}
              >
                Buy ticket with $0.1,<Typography>and choose numbers</Typography>{' '}
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'Poppins',
                    textTransform: 'uppercase',
                    lineHeight: '18px',
                  }}
                >
                  {' '}
                  for ticket.
                </Typography>
              </Typography>
            </Box>
          </Container>
        </Box>
        {/* second card */}
        <Box
          sx={{
            backgroundImage: `url(${second})`,
            width: {xs:'100%',sm:'30%',md:'30%',lg:"30%",xl:'33%'},
            height: '221px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius:{xs:"15px",sm:'15px',md:'15px',lg:'18px',xl:'20px'}
          }}
        >
          <Container sx={{paddingTop:'50px'}} >
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 700,
                fontFamily: 'Poppins',
                textTransform: 'uppercase',
                paddingBottom:'15px'
              }}
            >
            Wait For The Draw
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  textTransform: 'uppercase',
                  lineHeight: '18px',
                }}
              >
                
                 Wait for the draw<Typography>at 15:00 UTC+0</Typography>{' '}
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'Poppins',
                    textTransform: 'uppercase',
                    lineHeight: '18px',
                  }}
                >
                  {' '}
                  daily.
                </Typography>
              </Typography>
            </Box>
          </Container>
        </Box>
        {/* third card */}
        <Box
          sx={{
            backgroundImage: `url(${third})`,
            width: {xs:'100%',sm:'30%',md:'30%',lg:"30%",xl:'33%'},
            height: '221px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius:{xs:"15px",sm:'15px',md:'15px',lg:'18px',xl:'20px'}
          }}
        >
          <Container sx={{paddingTop:'50px'}} >
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 700,
                fontFamily: 'Poppins',
                textTransform: 'uppercase',
                paddingBottom:'15px'
              }}
            >
              Check For Prizes
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  textTransform: 'uppercase',
                  lineHeight: '18px',
                }}
              >
                   
                 Once the draw is over,<Typography>come back to this</Typography>{' '}
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'Poppins',
                    textTransform: 'uppercase',
                    lineHeight: '18px',
                  }}
                >
                  {' '}
                  page and check your
                </Typography>
                prize.
              </Typography>
            </Box>
          </Container>
        </Box>
        {/* third card end */}

      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Card;
