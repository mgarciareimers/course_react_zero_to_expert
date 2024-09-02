import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

const PublicRoutes = ({ children }) => {
    const { authState } = useContext(AuthContext);

    return authState.logged
        ? <Navigate to='/' />
        : children
}

export default PublicRoutes;