import React, { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layouts/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { execSignUpWithEmailPasswordGoogle } from '../../store/auth';

const initialFormData = {
    displayName: '',
    email: '',
    password: ''
};

const formValidations = {
    displayName: [ (value) => value.trim().length >= 2, 'The number of characters in the name has to be greater or equal than 2.' ],
    email: [ (value) => value.trim().includes('@'), 'The email format is not valid.' ],
    password: [ (value) => value.trim().length >= 6, 'The number of characters in the password has to be greater or equal than 6.' ],
}

const SignUpPage = () => {
    const dispatch = useDispatch();

    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const { status, errorMessage } = useSelector((state) => state.auth);

    const isAuthenticating = useMemo(() => status === 'checking', [ status ]);

    const { 
        displayName, email, password, 
        isFormValid, displayNameValidText, emailValidText, passwordValidText,
        onInputChange 
    } = useForm(initialFormData, formValidations);

    // Onclick methods.
    const onSubmitButtonClicked = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) {
            return;
        }

        dispatch(execSignUpWithEmailPasswordGoogle(displayName, email, password));
    }

    return (
        <AuthLayout title='Sign Up'>
            <form
                className='animate__animated animate__fadeIn animate__faster' 
                onSubmit={ onSubmitButtonClicked }
            >
                <Grid2 container>
                    { /* Inputs */ }
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Name' 
                            type='text' 
                            placeholder='John Doe' 
                            fullWidth 
                            name='displayName'
                            value={ displayName } 
                            onInput={ onInputChange } 
                            error={ formSubmitted && !!displayNameValidText }
                            helperText={ formSubmitted && displayNameValidText }
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Email' 
                            type='email' 
                            placeholder='email@google.com' 
                            fullWidth 
                            name='email'
                            value={ email } 
                            onInput={ onInputChange } 
                            error={ formSubmitted && !!emailValidText }
                            helperText={ formSubmitted && emailValidText }
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Password' 
                            type='password' 
                            placeholder='Password' 
                            name='password'
                            fullWidth value={ password }
                            onInput={ onInputChange }  
                            error={ formSubmitted && !!passwordValidText }
                            helperText={ formSubmitted && passwordValidText }
                        />
                    </Grid2>

                    { /* Buttons */ }
                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} spacing={ 2 }>
                        <Grid2 size={{ xs: 12 }} display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid2>

                        <Grid2 size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth type='submit' disabled={ isAuthenticating }>
                                <Typography sx={{ fontSize: '0.9rem' }}>Create account</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Already an account?</Typography>
                        <Link component={ RouterLink } color='inherit' to={ isAuthenticating ? '#' : '/auth/login' }>Login here</Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default SignUpPage;