// import React from 'react'
import { Box, Container } from '@mui/material';
import SectionFiveCard from './SectionFiveCard';
import SectionFour from './SectionFour';
import SectionTabel from './SectionTabel';
// import affilateRocket from '../../../../../../../assets/affilateRocket'

const index = () => {
  return (
    <Box sx={{marginLeft:"20px",marginRight:'20px'}}>
     <SectionFour/>
     <SectionFiveCard/>
     <SectionTabel/>
    </Box>
  );
};

export default index;
