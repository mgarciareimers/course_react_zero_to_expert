import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import ImageGallery from './ImageGallery';
import { useForm } from '../../hooks'; 
import { useSelector } from 'react-redux';

export const NoteView = () => {
    const { active : note } = useSelector((state) => state.journal);
    
    const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [ date ]);

    return (
        <Grid2 container 
            className='animate__animated animate__fadeIn animate__faster'
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
                { /* Header */ }
                <Grid2>
                    <Typography fontSize={ '1.6rem' } fontWeight='light'>{ dateString }</Typography>
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
                        name='title'
                        value={ title }
                        onChange={ onInputChange }
                    />

                    <TextField 
                        type='text'
                        variant='filled'
                        fullWidth
                        multiline
                        placeholder='What happened today?'
                        minRows={ 5 }
                        name='body'
                        value={ body }
                        onChange={ onInputChange }
                    />
                </Grid2>

                { /* Image gallery */ }
                <ImageGallery />
        </Grid2>
    );
}

export default NoteView;