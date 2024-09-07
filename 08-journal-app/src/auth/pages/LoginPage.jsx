import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';

const LoginPage = () => {
    return (
        <Grid2
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2 className='box-shadow' size={ 6 } sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2  }}>
                <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

                <form>
                    <Grid2 container>
                        <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label='Email' type='email' placeholder='email@google.com' fullWidth />
                        </Grid2>

                        <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label='Password' type='password' placeholder='Password' fullWidth/>
                        </Grid2>

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
            </Grid2>        
        </Grid2>
    );
}

export default LoginPage;