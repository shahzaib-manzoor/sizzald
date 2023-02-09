import { Box, Typography, Stack } from '@mui/material';

// import { mainBox, } from "./Cardstyle"
import { secondflex, typography, flex, unlock, mainBox } from './Sidebarstyle';

const Card = ({ text, img, background, vip14, unlocked, marginRight,marginLeft ,backgroundImage,handleOpenSpin}) => {
  return (
    <Stack sx={{ ...mainBox,  marginRight }}>
      <Box sx={{...secondflex,backgroundImage}} onClick={handleOpenSpin}>
        <img src={img}></img>
        <Box sx={{marginLeft:marginLeft,width:'100%'}}>
          <Typography sx={typography}> {text}</Typography>
          <Typography sx={{ ...unlock, vip14 }}> {unlocked}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Card;
