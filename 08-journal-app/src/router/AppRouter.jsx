import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { default as AuthRoutes } from '../auth/routes/AuthRoutes';
import { default as JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {
                status === 'authenticated'
                    ? <Route path='/*' element={ <JournalRoutes /> } /> /* Login and sign up. */
                    : <Route path='/auth/*' element={ <AuthRoutes /> } /> /* Journal app. */
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    );
}

export default AppRouter;