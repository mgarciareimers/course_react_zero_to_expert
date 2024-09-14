import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layouts/AuthLayout';
import { useForm } from '../../hooks';

const initialFormData = {
    name: '',
    email: '',
    password: ''
};

const formValidations = {
    name: [ (value) => value.trim().length >= 2, 'The number of characters in the name has to be greater or equal than 2.' ],
    email: [ (value) => value.trim().includes('@'), 'The email format is not valid.' ],
    password: [ (value) => value.trim().length >= 6, 'The number of characters in the password has to be greater or equal than 6.' ],
}

const SignUpPage = () => {
    const { 
        name, email, password, 
        nameValid, emailValid, passwordValid,
        onInputChange 
    } = useForm(initialFormData, formValidations);

    // Onclick methods.
    const onSubmitButtonClicked = (event) => {
        event.preventDefault();
        console.log(name, email, password);
        //dispatch(execSignUp(name, email, password));
    }

    return (
        <AuthLayout title='Sign Up'>
            <form onSubmit={ onSubmitButtonClicked }>
                <Grid2 container>
                    { /* Inputs */ }
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label='Name' 
                            type='text' 
                            placeholder='John Doe' 
                            fullWidth 
                            name='name'
                            value={ name } 
                            onInput={ onInputChange } 
                            error={ !nameValid }
                            helperText={ nameValid }
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
                        />
                    </Grid2>

                    { /* Buttons */ }
                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} spacing={ 2 }>
                        <Grid2 size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth type='submit'>
                                <Typography sx={{ fontSize: '0.9rem' }}>Create account</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Already an account?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>Login here</Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default SignUpPage;