// import React from 'react'
import { Container } from "@mui/material";
import Advertisment from "./Advertisment";
import AffiliateReward from "./AffiliateReward";
import EarningCard from "./EarningCard";
import SectionFour from "./SectionFour";
// import affilateRocket from '../../../../../../../assets/affilateRocket'

const index = () => {
  return (
    <Container maxWidth="xl">
      <Advertisment />
      <EarningCard />
      <AffiliateReward />
      <SectionFour />
    </Container>
  );
};

export default index;
