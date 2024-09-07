import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layouts/AuthLayout';

const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid2 container>
                    { /* Inputs */ }
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label='Email' type='email' placeholder='email@google.com' fullWidth />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label='Password' type='password' placeholder='Password' fullWidth/>
                    </Grid2>

                    { /* Buttons */ }
                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} spacing={ 2 }>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button variant='contained' fullWidth>
                                <Typography sx={{ fontSize: '0.9rem' }}>Login</Typography>
                            </Button>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button variant='contained' fullWidth>
                                <Google sx={{ fontSize: '1.2rem' }}/>
                                <Typography sx={{ ml: 1, fontSize: '0.9rem' }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }} justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to='/auth/sign-up'>Create an account</Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default LoginPage;