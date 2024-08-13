import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import UserProvider from './context/UserProvider';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';

const MainApp = () => {
  return (
    <UserProvider>
        <NavBar />

        <hr />

        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/login' element={ <LoginPage /> } />

          <Route path='/*' element={ <Navigate to='/about' /> } />
        </Routes>
    </UserProvider>
  );
}

export default MainApp;
