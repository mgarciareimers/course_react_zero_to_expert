import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 280;

const JournalLayout = ({ children }) => {
    return (
        <Box
            className='animate__animated animate__fadeIn animate__faster' 
            sx={{ display: 'flex' }}
        >
            <Navbar drawerWidth={ drawerWidth }/>
            
            <Sidebar drawerWidth={ drawerWidth }/>

            { /* Main content */ }
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                { /* Toolbar */ }
                <Toolbar />

                { children }

            </Box>

        </Box>
    );
}

export default JournalLayout;