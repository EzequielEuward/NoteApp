import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Chip } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [], tags = [] }) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls, tags }));
    };

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                        {tags.map((tag, index) => (
                            <Chip key={index} label={tag} size="small" color="primary" />
                        ))}
                    </Box>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
