// import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import Tabel from './Tabel'

const SectionTabel = () => {
    const typo = {
        fontSize: '30px',
        fontWeight: '400',
        fontFamily: 'Poppins',
        lineHeight: '40px',
        color: '#ffffff',
        textTransform: 'uppercase',
        paddingTop: '30px',
        paddingBottom:'30px'
      };
  return (
    <Box>
        <Box sx={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>

 <Typography sx={typo}> PLATFORM REAL-TIME REWARDS</Typography>
 <Button sx={{width:'258px',height:'44px',background:'#00C85C',borderRadius:"50px",color:'#ffffff'}}>
 Create Referral Code
 </Button>
        </Box>
        {/* main box flex */}
        <Box sx={{display:'flex',gap:1}}>
        {/* tabel */}

        <Box sx={{width:'50%'}}>
            <Tabel/>

        </Box>
        {/* second tabel */}
        <Box sx={{width:"50%"}}>
        <Tabel/>
        </Box>
        </Box>
    </Box>
  )
}

export default SectionTabel