import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const onLogoutButtonClicked = () => {
        navigate('/', {
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
