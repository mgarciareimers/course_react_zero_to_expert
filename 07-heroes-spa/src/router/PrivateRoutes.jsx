import React, { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { authState } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', `${ pathname }${ search }`);

    return authState.logged
        ? children
        : <Navigate 
            to='/login' 
        />
}

export default PrivateRoutes;