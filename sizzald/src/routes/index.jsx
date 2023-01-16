import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// routes
import MainRoutes from './Main.Routes';
import AuthenticationRoutes from './Authenticated.Routes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // const { isAuthenticated } = useSelector((state) => state.auth);
    const isAuthenticated= false

    if (isAuthenticated) {
        return useRoutes([MainRoutes]);
    } else {
        return useRoutes([AuthenticationRoutes]);
    }
}