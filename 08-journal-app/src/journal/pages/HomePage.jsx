import { IconButton, Typography } from '@mui/material';
import React from 'react';
import JournalLayout from '../layouts/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

const HomePage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView /> 
            { /* <NoteView />*/ }

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {
                        backgroundColor: 'error.main',
                        opacity: 0.9
                    },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    );
}

export default HomePage;