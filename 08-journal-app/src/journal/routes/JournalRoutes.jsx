import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />

            <Route path='/*' element={ <Navigate to='/' /> } />x
        </Routes>
    );
}

export default JournalRoutes;
