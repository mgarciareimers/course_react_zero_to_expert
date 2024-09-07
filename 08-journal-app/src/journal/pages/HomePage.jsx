import { Typography } from '@mui/material';
import React from 'react';
import JournalLayout from '../layouts/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

const HomePage = () => {
    return (
        <JournalLayout>
            { /* <NothingSelectedView /> */ }
            <NoteView />
        </JournalLayout>
    );
}

export default HomePage;