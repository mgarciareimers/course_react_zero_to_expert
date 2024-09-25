import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/*' element={ <Navigate to={ '/auth' } /> } />
        </Routes>
    )
}

export default AuthRoutes;