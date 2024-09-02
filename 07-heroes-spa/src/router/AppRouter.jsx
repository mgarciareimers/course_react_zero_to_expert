import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                } />

                <Route path='/*' element={ 
                    <PrivateRoutes>
                        <HeroesRoutes />
                    </PrivateRoutes> 
                } />

                {/* <Route path='/login' element={ <LoginPage /> } /> */}
                {/* <Route path='/*' element={ <HeroesRoutes /> } /> */}
            </Routes>
        </>
    );
}

export default AppRouter;