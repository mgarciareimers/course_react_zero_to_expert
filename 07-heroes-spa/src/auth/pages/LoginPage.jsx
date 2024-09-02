import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogoutButtonClicked = () => {
        login('Magic Mike');

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className='container mt-5'>
            <h1>LoginPage</h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={ onLogoutButtonClicked }
            >
                Login
            </button>
        </div>
    );
}

export default LoginPage;
