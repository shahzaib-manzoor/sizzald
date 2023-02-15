import reactLogo from './assets/react.svg';
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import { Box } from '@mui/material';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import {persistor,store} from './store/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      text: {
        primary: '#ffffff',
        secondary: '#ddad1e',
      },
      backgrounds:{
        primary:'transperant',
        secondary:'blue',
      }
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <BrowserRouter>
            <Box sx={{ background: '#01022F', }}>
              <Routes exact />
            </Box>
          </BrowserRouter>
        </Web3ReactProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
