import { lazy } from 'react';

 
import Dashboard from '../components/Dashboard';
 
 

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <Dashboard />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
         
    ]
};

export default MainRoutes;