import { IconButton, Typography } from '@mui/material';
import React from 'react';
import JournalLayout from '../layouts/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { execCreateNewNote } from '../../store/journal';

const HomePage = () => {
    const dispatch = useDispatch();

    const { isSaving, active } = useSelector((state) => state.journal);

    // Onclick methods.
    const onAddNoteButtonClicked = () => {
        dispatch(execCreateNewNote());
    }

    return (
        <JournalLayout>
            {
                active == null
                    ? <NothingSelectedView /> 
                    : <NoteView />
            }

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
                disabled={ isSaving }
                onClick={ onAddNoteButtonClicked }
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    );
}

export default HomePage;