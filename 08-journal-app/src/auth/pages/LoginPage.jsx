import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layouts/AuthLayout';

import { useForm } from '../../hooks';
import { execLogin, execSignInWithGoogle } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';

const initialFormData = {
    email: '',
    password: ''
};

const LoginPage = () => {
    const dispatch = useDispatch();

    const { status } = useSelector(state => state.auth);

    const { email, password, onInputChange } = useForm(initialFormData);

    const isAuthenticating = useMemo(() => status === 'checking', [ status ]);

    // Onclick methods.
    const onSubmitButtonClicked = (event) => {
        event.preventDefault();
        dispatch(execLogin(email, password));
    }

    const onGoogleButtonClicked = () => {
        dispatch(execSignInWithGoogle());
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={ onSubmitButtonClicked }>
                <Grid2 container>
                    { /* Inputs */ }
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Email' 
                            type='email' 
                            placeholder='email@google.com' 
                            fullWidth 
                            name='email'
                            value={ email } 
                            onInput={ onInputChange } 
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Password' 
                            type='password' 
                            placeholder='Password' 
                            fullWidth
                            name='password'
                            value={ password } 
                            onInput={ onInputChange }
                        />
                    </Grid2>

                    { /* Buttons */ }
                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} spacing={ 2 }>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button variant='contained' fullWidth type='submit' disabled={ isAuthenticating }>
                                <Typography sx={{ fontSize: '0.9rem' }}>Login</Typography>
                            </Button>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button variant='contained' fullWidth onClick={ onGoogleButtonClicked } disabled={ isAuthenticating }>
                                <Google sx={{ fontSize: '1.2rem' }}/>
                                <Typography sx={{ ml: 1, fontSize: '0.9rem' }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to={ isAuthenticating ? '#' : '/auth/sign-up' } >Create an account</Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default LoginPage;