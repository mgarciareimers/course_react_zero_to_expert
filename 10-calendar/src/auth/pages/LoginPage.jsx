import React, { useEffect } from 'react';
import './LoginPage.css';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
};

const signUpFormFields = {
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRepeatPassword: ''
};

export const LoginPage = () => {
    const { login, signUp, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { signUpName, signUpEmail, signUpPassword, signUpRepeatPassword, onInputChange: onSignUpInputChange } = useForm(signUpFormFields);

    useEffect(() => {
        if (errorMessage !== undefined && errorMessage.length > 0) {
            Swal.fire(
                'Information',
                errorMessage,
                'error'
            );
        }

    }, [ errorMessage ]);
    

    const onLoginButtonClicked = (event) => {
        event.preventDefault();

        login({ 
            email: loginEmail, 
            password: loginPassword 
        });
    }

    const onSignUpButtonClicked = (event) => {
        event.preventDefault();

        if (signUpPassword !== signUpRepeatPassword) {
            Swal.fire(
                'Information',
                'Both passwords have to be equal.',
                'error'
            );
            return;
        }

        signUp({ 
            name: signUpName, 
            email: signUpEmail, 
            password: signUpPassword
        });
    }

    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3>Login</h3>
                    <form onSubmit={ onLoginButtonClicked }>
                        <div className='form-group mb-2'>
                            <input 
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                name='loginEmail'
                                value={ loginEmail }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                name='loginPassword'
                                value={ loginPassword }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className='d-grid gap-2'>
                            <input 
                                type='submit'
                                className='btnSubmit'
                                value='Login' 
                            />
                        </div>
                    </form>
                </div>

                <div className='col-md-6 login-form-2'>
                    <h3>Create account</h3>
                    <form onSubmit={ onSignUpButtonClicked }>
                        <div className='form-group mb-2'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='signUpName'
                                value={ signUpName }
                                onChange={ onSignUpInputChange }
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                name='signUpEmail'
                                value={ signUpEmail }
                                onChange={ onSignUpInputChange }
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password' 
                                name='signUpPassword'
                                value={ signUpPassword }
                                onChange={ onSignUpInputChange }
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Repeat password' 
                                name='signUpRepeatPassword'
                                value={ signUpRepeatPassword }
                                onChange={ onSignUpInputChange }
                            />
                        </div>

                        <div className='d-grid gap-2'>
                            <input 
                                type='submit' 
                                className='btnSubmit' 
                                value='Sign up' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;