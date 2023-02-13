import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Style/app.css'
import './Style/home.css'
import './Style/game.css'
import './Style/shop.css'
import './Style/users.css'
import './Style/videos.css'
import './Style/header.css'
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>

);
