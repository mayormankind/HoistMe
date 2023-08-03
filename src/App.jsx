import React from 'react';
import './App.css'
import {
  ChakraProvider,
  Box,
  Grid,
  theme
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import WebsiteWrapper from './components/WebWrapper';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<WebsiteWrapper/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/createAccount'} element={<Signup/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
        </Routes>
      </Router>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end"/>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;