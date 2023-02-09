import reactLogo from './assets/react.svg';
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import { Box } from '@mui/material';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import store from './store/store';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
// const theme = createTheme({
//   palette: {
//     // mode: 'light',
    
//       // palette values for light mode
//       primary: '#173A5E',
//       secondary: '#46505A',
//       text: { 
       
//         primary: { main:red[500]}
//       },
    
//   },
// });
function App() {
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };


  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <Web3ReactProvider getLibrary={getLibrary}>
          <BrowserRouter>
            <Box sx={{ background: '#01022F', }}>
              <Routes exact />
            </Box>
          </BrowserRouter>
        </Web3ReactProvider>
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
