import { TurnedInNot } from '@mui/icons-material';
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

const SidebarItem = ({ note }) => {
    const title = useMemo(() => {
        return note.title.length > 17
            ? `${ note.title.substring(0, 17) }...`
            : note.title
    }, [ note.title ]);

    const dispatch = useDispatch();

    // Onclick methods.
    const onItemClicked = () => {
        dispatch(setActiveNote({ note: note }));
    }

    return (
        <ListItem 
            disablePadding
        >
            <ListItemButton
                onClick={ onItemClicked }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid2 container>
                    <ListItemText 
                        primary={ title }
                        secondary={ note.body }
                    />
                </Grid2>
            </ListItemButton>
        </ListItem>
    );
}

export default SidebarItem;