import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import React from 'react';
import ImageGallery from './ImageGallery';

export const NoteView = () => {
    return (
        <Grid2 container 
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
                { /* Header */ }
                <Grid2>
                    <Typography fontSize={ '1.6rem' } fontWeight='light'>28 de agosto, 2023</Typography>
                </Grid2>

                <Grid2>
                    <Button color='primary' sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: '1.4rem', mr: 1 }} />
                        Save
                    </Button>
                </Grid2>

                { /* Inputs */ }
                <Grid2 container width='100%'>
                    <TextField 
                        type='text'
                        variant='filled'
                        fullWidth
                        placeholder='Type a title'
                        label='Title'
                        sx={{ mb: 2 }}
                    />

                    <TextField 
                        type='text'
                        variant='filled'
                        fullWidth
                        multiline
                        placeholder='What happened today?'
                        minRows={ 5 }
                    />
                </Grid2>

                { /* Image gallery */ }
                <ImageGallery />
        </Grid2>
    );
}

export default NoteView;