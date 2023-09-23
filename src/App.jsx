import React from 'react';
import './App.css'
import {
  ChakraProvider,
  Box,
  Grid
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import WebsiteWrapper from './components/WebWrapper';
import Template1 from './components/Subfiles/Edit/Template1/tmp1';
import Template2 from './components/Subfiles/Edit/Template2/tmp2';
import theme from './chakra';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<WebsiteWrapper/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/createAccount'} element={<Signup/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
          <Route path={'/template1'} element={<Template1/>}/>
          <Route path={'/template2'} element={<Template2/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;