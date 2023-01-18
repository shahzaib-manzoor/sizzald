import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
const Layout = ()  =>{
  return (
    <div className='Layout DBlock'>
      <Header />
      <SideBar/>
       <Outlet   />
      <Footer /> 
    </div>
  );
};

export default Layout;
