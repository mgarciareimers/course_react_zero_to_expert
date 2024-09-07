import { Grid2, Typography } from '@mui/material';
import React from 'react';

const AuthLayout = ({ title, children }) => {
    return (
        <Grid2
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2 
                className='box-shadow' 
                size={ 8 } 
                sx={{ 
                    width: { xs: '100%', sm: 500 },
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2 
                }}
            >
                <Typography variant='h5'>{ title }</Typography>

                { children }
            </Grid2>
        </Grid2>
    );
}

export default AuthLayout;