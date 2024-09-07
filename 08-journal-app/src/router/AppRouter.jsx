import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { default as AuthRoutes } from '../auth/routes/AuthRoutes';
import { default as JournalRoutes } from '../journal/routes/JournalRoutes';

const AppRouter = () => {
    return (
        <Routes>

            { /* Login and sign up. */ }
            <Route path='/auth/*' element={ <AuthRoutes /> } />

            { /* Journal app. */ }
            <Route path='/*' element={ <JournalRoutes /> } />
            <Route />
        </Routes>
    );
}

export default AppRouter;