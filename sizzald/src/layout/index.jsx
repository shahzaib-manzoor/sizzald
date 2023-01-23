import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { Box } from '@mui/material';
import { useState } from 'react';
import MiniSideBar from './SideBar/MiniSideBar';
const Layout = () => {
  const[openDrawer,setOpenDrawer] = useState(false);
  const handleDrawer = () =>{
    setOpenDrawer(!openDrawer);
  }
  // console.log(window.innerWidth)
  return (
    <div>
      <Header handleDrawer={handleDrawer}/>

      <Box sx={{ display: 'flex' }}>
        {
          window.innerWidth > 600 &&  <Box sx={{width:openDrawer ? "7%":"20%",mt:'30px'}}>

          {openDrawer  ? <MiniSideBar/>:<SideBar />} 
           </Box>
        }
       
        <Box sx={{ width: openDrawer ? "93%":'80%' ,mt:'30px'}}>
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Layout;
