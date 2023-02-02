// import React from 'react'
import { Container } from '@mui/material';
import SectionFiveCard from './SectionFiveCard';
import SectionFour from './SectionFour';
import SectionTabel from './SectionTabel';
// import affilateRocket from '../../../../../../../assets/affilateRocket'

const index = () => {
  return (
    <Container maxWidth='xl'>
     <SectionFour/>
     <SectionFiveCard/>
     <SectionTabel/>
    </Container>
  );
};

export default index;
