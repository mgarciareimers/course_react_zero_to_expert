import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';
import React from 'react';

const NothingSelectedView = () => {
    return (
        <Grid2
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ 
                minHeight: 'calc(100vh - 110px)', 
                backgroundColor: 'primary.main', 
                borderRadius: 3,
                textAlign: 'center'
            }}
        >
            <Grid2 size={ 12 }>
                <StarOutline sx={{ fontSize: 60, color: 'white' }}/>
            </Grid2>
            <Grid2 size={ 12 }>
                <Typography color='white' variant='h6'>Select or create a note</Typography>
            </Grid2>
        </Grid2>
    );
}

export default NothingSelectedView;