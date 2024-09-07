import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from '../pages';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/sign-up' element={ <SignUpPage /> } />

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    );
}

export default AuthRoutes;
