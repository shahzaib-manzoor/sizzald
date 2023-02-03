// import React from 'react'
import { Box, Container } from "@mui/material";
import Advertisment from "./Advertisment";
import AffiliateReward from "./AffiliateReward";
import EarningCard from "./EarningCard";
import SectionFour from "./SectionFour";
import SectionFiveCard from './SectionFiveCard';
import SectionTabel from './SectionTabel';
// import affilateRocket from '../../../../../../../assets/affilateRocket'

const index = () => {
  return (
    <Box sx={{marginLeft:'20px',marginRight:'20px'}}>
      <Advertisment />
      <EarningCard />
      <AffiliateReward />
      <SectionFour />
      <SectionFiveCard />
      <SectionTabel />
    </Box>
  );
};

export default index;
