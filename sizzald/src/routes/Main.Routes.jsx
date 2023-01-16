import { lazy } from 'react';

 
import Dashboard from '../components/Dashboard';
import Signup from '../components/Signup';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
 
    children: [ 
        {
            path: '/',
            element: <Dashboard />,
        },
         
         
         
    ]
};


export default MainRoutes;