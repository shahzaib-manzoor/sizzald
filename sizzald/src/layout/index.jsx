import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { Box } from '@mui/material';
const Layout = () => {
  return (
    <div>
      <Header />

      <Box sx={{ display: 'flex' }}>
        <Box sx={{width:"20%"}}>

        <SideBar />
        </Box>
        <Box sx={{ width: '80%' }}>
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Layout;
