import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layouts/AuthLayout';

const SignUpPage = () => {
    return (
        <AuthLayout title='Sign Up'>
            <form>
                <Grid2 container>
                    { /* Inputs */ }
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label='Name' type='text' placeholder='John Doe' fullWidth />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label='Email' type='email' placeholder='email@google.com' fullWidth />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label='Password' type='password' placeholder='Password' fullWidth/>
                    </Grid2>

                    { /* Buttons */ }
                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} spacing={ 2 }>
                        <Grid2 size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth>
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