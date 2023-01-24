import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import MobileFoter from '../layout/Footer/MobileFoter'
import { Box } from '@mui/material';
import { useState } from 'react';
import MiniSideBar from './SideBar/MiniSideBar';
const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileDrawer, setmobileDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleMObileDrawer=()=>{
setmobileDrawer(!mobileDrawer);

  }
  const handlemObileDrawer=()=>{
setmobileDrawer(!true);


  }
  // console.log(window.innerWidth)
  return (
    <div>
      <Header handleDrawer={handleDrawer} handlemObileDrawer={handlemObileDrawer} />

      <Box sx={{ display: 'flex' }}>
        
          <Box sx={{ width: openDrawer ? '7%' : mobileDrawer? '100%':{xs:'100%',sm:"0%",md:"0%",lg:'20%'}, mt: '30px' ,display:{xs:mobileDrawer?"block":'none',lg:"block"}}}>
            {openDrawer ? <MiniSideBar /> : <SideBar />}
          </Box>
       

        <Box
          sx={{
            // width:
            width:{xs:'100%',lg:openDrawer?'93%':'80%'},
            mt: '30px',
            display: mobileDrawer ? {xs:'none',sm:"none",md:"none",lg:"flex"}:'flex',
            flexDirection: 'column',
          }}
        >
          <Outlet />
          <Footer />
          <Box sx={{display:{xs:"block",sm:"none",md:"none",lg:"none"}}}>

          <MobileFoter  handleMObileDrawer={ handleMObileDrawer}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
// openDrawer ? '93%' : '80%'
