import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid2, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef } from 'react';
import ImageGallery from './ImageGallery';
import { useForm } from '../../hooks'; 
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';
import { execDeleteNote, execFilesUpload, execSaveNote } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active : note, messageSaved, isSaving } = useSelector((state) => state.journal);
    
    const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [ date ]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote({ note: formState }));
    }, [ formState ]);

    useEffect(() => {
        if (messageSaved.length <= 0) {
            return;
        }

        Swal.fire('Note updated', messageSaved, 'success');
    }, [ messageSaved ]);
    

    // Onclick methods.
    const onSaveButtonClicked = () => {
        dispatch(execSaveNote(formState));
    }

    const onFileInputChange = ({ target }) => {
        if (target.files.length <= 0) {
            return;
        }

        dispatch(execFilesUpload(target.files));
    }

    const onDeleteButtonClicked = () => {
        dispatch(execDeleteNote(formState));
    }

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
                    <input 
                        ref={ fileInputRef }
                        type='file'
                        multiple
                        onChange={ onFileInputChange }
                        style={{ display: 'none' }}
                    />

                    <IconButton
                        color='primary'
                        disabled={ isSaving }
                        onClick={ () => fileInputRef.current.click() }
                    >
                        <UploadOutlined />
                    </IconButton>

                    <Button 
                        color='primary' 
                        sx={{ padding: 2 }}
                        disabled={ isSaving }
                        onClick={ onSaveButtonClicked }
                    >
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

                <Grid2 container
                    justifyContent='end'
                >
                    <Button
                        sx={{ mt: 2 }}
                        color='error'
                        onClick={ onDeleteButtonClicked }
                    >
                        <DeleteOutline />
                        Delete
                    </Button>
                </Grid2>

                { /* Image gallery */ }
                <ImageGallery urls={ imageUrls } />
        </Grid2>
    );
}

export default NoteView;