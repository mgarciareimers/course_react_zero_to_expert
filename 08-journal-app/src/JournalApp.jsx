import React from 'react';
import AppRouter from './router/AppRouter';
import { AppTheme } from './theme';

const JournalApp = () => {
    return (
        <AppTheme 
            children={ <AppRouter /> }
        />
    )
}

export default JournalApp;