import React from 'react';
import './App.css'
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template1 from './components/Templates/Edit/Template1/Tmp1';
import Template2 from './components/Templates/Edit/Template2/Tmp2';
import Landing from './pages/landing/Landing';
import theme from './chakra';
import Login from './pages/landing/Login';
import Signup from './pages/landing/Signup';
import PasswordReset from './components/landing/PasswordReset';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* <Route index element={<WebsiteWrapper/>}/> */}
          <Route index element={<Landing/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/createAccount'} element={<Signup/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
          <Route path={'/passwordReset'} element={<PasswordReset/>}/>
          <Route path={'/template1'} element={<Template1/>}/>
          <Route path={'/template2'} element={<Template2/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;