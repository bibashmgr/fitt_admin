import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// custom-styling
import './index.scss';

// custom-theme
import theme from './theme';

import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} portalZIndex={100}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
