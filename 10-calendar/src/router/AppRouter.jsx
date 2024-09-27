import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { CalendarRoutes } from '../calendar/routes';

const AppRouter = () => {
    const status = 'authenticated';

    return (
        <>
            <Routes>
                {
                    (status === 'authenticated')
                        ? <Route path='/*' element={ <CalendarRoutes /> } />
                        : <Route path='/auth/*' element={ <AuthRoutes /> } />
                }

                <Route path='/*' element={ <Navigate to={ '/auth' } /> } />
            </Routes>
        </>
    );
}

export default AppRouter;
