import { lazy } from 'react';
import Login from '../components/Login';

// project import
 

// login option 3 routing
const AuthLogin =   import('../components/Login');
 

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <Login />,
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        

       
    ]
    
};

export default AuthenticationRoutes;