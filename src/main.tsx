import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ListProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
