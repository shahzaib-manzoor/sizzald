// import React from 'react'

import { Box, Button, Typography } from '@mui/material';
import loatryBanner from '../assets/loatryBanner.svg';
import jackpot from '../assets/jackpot.svg';
import loatryButton from '../assets/loatryButton.svg';
import bannerLotary from '../assets/bannerLotary.png';
import { textTransform } from '@mui/system';
import GameId from './Loatry/GameId';
import Card from './Loatry/Card';
import CocoLotary from './Loatry/CocoLotary';
import Instruction from './Loatry/Instruction';
import  Balance  from './Loatry/Balance';
import DetailedCard from '../ui-components/DetailCard';
import Network from "../ui-components/Network";

const Loatry = () => {
  return (
    <Box sx={{  }}>
      <Box
        sx={{
          width: '97.5%',
          backgroundImage: `url(${bannerLotary})`,
          height: '500px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginLeft:'20px',
          borderRadius:'10px',mt:"20px"
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '30px',
            height: '446px',
          }}
        >
          <Box sx={{ paddingTop: '30px' }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: 'Poppins',
              }}
            >
              Lottery Game ID.20230109
            </Typography>
          </Box>
          <Box></Box>
          <Box
            sx={{
              paddingRight: {
                xs: '20px',
                sm: '20px',
                lg: '100px',
                xl: '120px',
              },
              mt: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <img style={{ maxWidth: '100%' }} src={jackpot}></img>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#FBB315',
                  fontSize: '20px',
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  lineHeight: '40px',
                  textTransform: 'capitalize',
                  paddingLeft: '10px',
                }}
              >
                nest draw in
              </Typography>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: 'poppins',
                  textTransform: 'capitalize',
                  lineHeight: '40px',
                }}
              >
                04h:36m:25s
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              <img src={loatryButton}></img>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              paddingTop: '30px',
              paddingRight: '20px',
              gap: 2,
            }}
          >
            <Typography
              sx={{ color: ' #03FB75', fontSize: '18px', fontWeight: 400 }}
            >
              Rules
            </Typography>
            <Typography
              sx={{ color: ' #03FB75', fontSize: '18px', fontWeight: 400 }}
            >
              probably fair
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ marginLeft: '30px' }}>
            <span
              style={{
                color: '#ffffff',
                fontSize: '18px',
                fontFamily: 'poppins',
                fontWeight: 600,
                lineHeight: '22px',
              }}
            >
              N Thành Công{' '}
              <span
                style={{
                  color: '#07F273',
                  fontSize: '18px',
                  fontFamily: 'poppins',
                  fontWeight: 600,
                  lineHeight: '22px',
                }}
              >
                Bought 1 lottery tickets
              </span>
            </span>
          </Box>
          <Box sx={{ marginRight: '20px' }}>
            <span
              style={{
                color: '#ffffff',
                fontSize: '18px',
                fontFamily: 'poppins',
                fontWeight: 600,
                lineHeight: '22px',
              }}
            >
              Don't miss your chance!{' '}
              <span
                style={{
                  color: '#07F273',
                  fontSize: '18px',
                  fontFamily: 'poppins',
                  fontWeight: 600,
                  lineHeight: '22px',
                }}
              >
                92964
              </span>{' '}
              tickets have been sold today!
            </span>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingLeft: '20px' ,mt:'40px'}}>
        <Button
          sx={{
            background: '#5842F4',
            width: '184px',
            height: '44px',
            borderRadius: '50px',
            color: '#ffffff',
            textTransform: 'capitalize',
          }}
        >
          My Tickets
          <Box>
            <Button
              sx={{
                background: ' #03FB75',
                width: '48px',
                height: '26px',
                borderRadius: '50px',
                marginLeft: '10px',
              }}
            >
              53{' '}
            </Button>
          </Box>
        </Button>
        <Button
          sx={{
            borderRadius: '62px',
            color: '#ffffff',
            border: '1px solid rgba(3, 251, 117, 0.22)',
            fontSize: '10px',
            height: '39px',
            width: '110px',
            marginLeft:'20px'
          }}
        >
          {' '}
          My winings
        </Button>
        <Button
          sx={{
            borderRadius: '62px',
            color: '#ffffff',
            border: '1px solid rgba(3, 251, 117, 0.22)',
            fontSize: '10px',
            height: '44px',
            width: '91px',
            marginLeft:'20px'
          }}
        >
          {' '}
          results
        </Button>
        <Button
          sx={{
            borderRadius: '62px',
            color: '#ffffff',
            border: '1px solid rgba(3, 251, 117, 0.22)',
            fontSize: '10px',
            height: '39px',
            width: '110px',
            marginLeft:'20px'
          }}
        >
          {' '}
       stook winner
        </Button>
        {/* components */}

        <GameId/>
        <Card/>
        <CocoLotary/>
        <Instruction/>
        <Balance/>
        <Box sx={{paddingBottom:'60px'}}>

        <DetailedCard />
        </Box>
        <Network/>

        {/* <AcceptedNetwork/> */}
      </Box>
    </Box>
  );
};

export default Loatry;
