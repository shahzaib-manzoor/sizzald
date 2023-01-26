import { Box, Paper ,styled} from '@mui/material';
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
    <Box >
      <HiddenScroll
        sx={{
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'fixed',
          background: '#75788D',
          // height: '800px',
          overflowY: 'auto',
          overflowX: 'hidden',
          paddingBottom:'20px',
         
          // width:'5%'
          // marginBottom:'50px'
          height:"850px",
          marginBottom:'40px'
        }}
      >
        <Box
          sx={{
            // mt: 'px',
            // paddingTop:"120px",
            background: '#424563',
            width: '100%',
            height: '50px',
            display: 'flex',
            mt:"80px",
            padding:"6px"
          }}
        >
          <img
            src={spinImage}
            style={{ marginLeft: '15px', width: '53%' }}
          ></img>
        </Box>
        <Box sx={{mt:"40px",background:'#424563',width:"100%"}}>
        <img src={gold} style={{marginLeft:"10px",width:"50px",}}></img>

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
      </HiddenScroll>
    </Box>
  );
};

export default MiniSideBar;