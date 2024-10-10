import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { CalendarRoutes } from '../calendar/routes';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

const AppRouter = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if (status === 'checking') {
        return (
            <h3>Loading...</h3>
        );
    }

    return (
        <>
            <Routes>
                {
                    (status === 'authenticated')
                        ? <Route path='/*' element={ <CalendarRoutes /> } />
                        : (
                            <>
                                <Route path='/auth/*' element={ <AuthRoutes /> } />
                                <Route path='/*' element={ <Navigate to={ '/auth' } /> } />
                            </>
                        )
                }
            </Routes>
        </>
    );
}

export default AppRouter;
