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
function App() {
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <Provider store={store}> 
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <Box sx={{ background: '#01022F' }}>
            <Routes exact />
          </Box>
        </BrowserRouter>
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
