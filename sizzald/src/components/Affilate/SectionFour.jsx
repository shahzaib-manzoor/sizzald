// import React from 'react'
import { Box,Container } from '@mui/material';
import affilateRocket from '../../assets/affilateRocket.svg';
const SectionFour = () => {
  return (
    <div>
         <Box
        sx={{
          backgroundImage: `url(${affilateRocket})`,
          width: '100%',
          height: '400px',
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
        }}
      >
        <Container>

        </Container>
      </Box>
    </div>
  )
}

export default SectionFour