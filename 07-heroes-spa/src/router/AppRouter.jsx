import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../ui';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/*' element={ <HeroesRoutes /> } />
            </Routes>
        </>
    );
}

export default AppRouter;