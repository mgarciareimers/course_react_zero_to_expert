import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Sidebar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open={ true }
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Magic Mike</Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        [ 'January', 'Febrary', 'March', 'April' ].map((element) => (
                            <ListItem key={ element } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid2 container>
                                        <ListItemText 
                                            primary={ element }
                                            secondary={ 'Incididunt veniam sunt incididunt culpa et qui consequat.' }
                                        />
                                    </Grid2>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    );
}

export default Sidebar;