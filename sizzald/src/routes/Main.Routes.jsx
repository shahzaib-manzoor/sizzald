import { lazy } from 'react';

 
import Dashboard from '../components/Dashboard';
import Picks from '../components/Picks';
import Signup from '../components/Signup';
import Layout from '../layout';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path:'/',   
    element: <Layout />,
    children: [ 
        
        {
            path: '/',
            element: <Dashboard />,
        },
        {
            path: '/picksforyou',
            element: <Picks/>,
        },
        {
            path: '/',
            element: <Dashboard />,
        },
         
         
    ]
};


export default MainRoutes