import { Avatar, Box, Paper, styled } from '@mui/material';
import spinImage from '../../assets/Frame.svg';
import gold from '../../assets/gold.svg';
import casino from '../../assets/casino.svg';
import sports from '../../assets/sports.svg';
import lotery from '../../assets/lotery.svg';
import affilate from '../../assets/affilate.svg';
import fair from '../../assets/fair.svg';
import vipClub from '../../assets/vipClub.svg';
import fourm from '../../assets/fourm.svg';
import blog from '../../assets/blog.svg';
import headphones from '../../assets/headphones.svg';
import languages from '../../assets/languages.svg';
import sponsership from '../../assets/sponsership.svg';
import { BorderRight } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';
import { miniSidebarPicBox } from './Sidebarstyle';

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import styled from '@emotion/styled';
const MiniSideBar = ({ item }) => {
  const HiddenScroll = styled(Box)`
::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */

`
  return (
    <div style={{ position: "relative" }}>
      <HiddenScroll
        sx={{
          position: 'fixed',
          background: "rgba(43, 45, 80, 0.6)",
          overflowY: 'auto',
          overflowX: 'hidden',
          paddingBottom: '50px',
          height: "100vh",
          borderRadius: '8px',
          animation: "fadeInAnimation 1s",
          
          // width: '6%',
          // paddingTop: '90px'
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingBottom:"100px",
          cursor:'pointer',
          
          // height: "100%"
        }}>


          <Box
            sx={miniSidebarPicBox}
          >
            <img
              src={spinImage}
              style={{ width: '50%', height: '100%', objectFit: 'contain' }}
            ></img>
          </Box>
          <Box sx={miniSidebarPicBox}>
            <img src={gold} style={{ width: '50%', height: '100%', objectFit: 'contain' }}></img>
          </Box>
          <Box sx={{ mt: '50px' }}>
            <img src={casino}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={sports} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={lotery} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={affilate} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={fair} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={vipClub} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={fourm} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={blog} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={headphones} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px' }}>
            <img src={languages} style={{ mt: '20px' }}></img>
          </Box>
          <Box sx={{ mt: '30px', mb: '40px' }}>
            <img src={sponsership} style={{ mt: '20px' }}></img>
          </Box>
          {/* <Box sx={{ mt: '30px', mb: '40px' }}/> */}
       
          <Box sx={miniSidebarPicBox}>
          <Avatar
                sx={{
                  background: "#ffffff",
                  marginRight: "5px",
                  width: "52%",
                  height: "70%",
                  borderRadius:'50%',
                  objectFit:'contain'
                }}
              >
                <DarkModeOutlinedIcon sx={{ color: "black" }} />
              </Avatar>
          </Box>
        </Box>
      </HiddenScroll>
    </div>
  );
};

export default MiniSideBar;