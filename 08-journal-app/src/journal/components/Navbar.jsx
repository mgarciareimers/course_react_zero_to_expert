import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { execLogout } from '../../store/auth';

const Navbar = ({ drawerWidth }) => {
    const dispatch = useDispatch();

    // Onclick methods.
    const onLogoutButtonClicked = () => {
        dispatch(execLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{ width: { sm: `calc(100% - ${ drawerWidth }px)` }, ml: { sm: `${ drawerWidth }px` } }}
        >
            <Toolbar>
                <IconButton
                    color='inherited'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined sx={{ color: 'white' }} />
                </IconButton>

                <Grid2 container direction='row' justifyContent='space-between' size={ 12 } alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

                    <IconButton color='error' onClick={ onLogoutButtonClicked }>
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;