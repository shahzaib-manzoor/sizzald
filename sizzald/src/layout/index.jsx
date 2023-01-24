import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { Box } from '@mui/material';
import { useState } from 'react';
import MiniSideBar from './SideBar/MiniSideBar';
const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  // console.log(window.innerWidth)
  return (
    <div>
      <Header handleDrawer={handleDrawer} />

      <Box sx={{ display: 'flex' }}>
        
          <Box sx={{ width: openDrawer ? '7%' : '20%', mt: '30px' ,display:{xs:"none",lg:"block"}}}>
            {openDrawer ? <MiniSideBar /> : <SideBar />}
          </Box>
       

        <Box
          sx={{
            // width:
            width:{xs:'100%',lg:openDrawer?'93%':'80%'},
            mt: '30px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
// openDrawer ? '93%' : '80%'
