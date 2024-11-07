import React, { useState } from 'react';
import { Box, Divider, Drawer, List, Toolbar, Typography, InputBase, IconButton, ListItem, ListItemButton, ListItemText, Button, AppBar, CssBaseline } from '@mui/material';
import { Search, Archive, ExpandMore, ExpandLess, Menu as MenuIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 280 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    const { isDarkMode } = useSelector(state => state.ui); // Agregar el estado de modo oscuro
    const [searchTerm, setSearchTerm] = useState('');
    const [showArchived, setShowArchived] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const archivedNotes = notes.filter(note => note.archived);

    const drawerContent = (
        <Box sx={{
            width: drawerWidth,
            backgroundColor: isDarkMode ? '#121212' : '#fff', // Cambiar el color de fondo
            color: isDarkMode ? '#fff' : '#000', // Cambiar el color del texto
            '& .MuiListItem-root': {
                backgroundColor: isDarkMode ? '#333' : '#fff', // Cambiar el color de fondo de los items
                '&:hover': {
                    backgroundColor: isDarkMode ? '#444' : '#eee', // Cambiar el color al pasar el ratón
                },
            },
        }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider sx={{ backgroundColor: isDarkMode ? '#444' : '#ddd' }} />  {/* Cambia el color del divider */}

            {/* Campo de búsqueda */}
            <Box sx={{ display: 'flex', alignItems: 'center', margin: 2 }}>
                <InputBase
                    placeholder="Buscar notas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    startAdornment={<Search sx={{ marginRight: 1, color: 'action.active' }} />}
                    sx={{
                        flex: 1,
                        padding: '4px 8px',
                        borderRadius: 1,
                        border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`, // Cambia el color del borde
                        backgroundColor: isDarkMode ? '#333' : '#fff', // Cambia el fondo del input
                        color: isDarkMode ? '#fff' : '#000', // Cambia el color del texto
                    }}
                />
                <IconButton sx={{ ml: 1 }}>
                    <Search />
                </IconButton>
            </Box>

            {/* Lista de Notas */}
            <Divider sx={{ marginBottom: 1, backgroundColor: isDarkMode ? '#444' : '#ddd' }} />
            <Typography variant="subtitle1" sx={{ padding: '8px 0', fontWeight: 'bold', paddingLeft: 2 }}>
                Notas
            </Typography>
            <List>
                {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                        <SideBarItem key={note.id} {...note} tags={note.tags || []} />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ padding: 2 }}>
                        No hay notas disponibles.
                    </Typography>
                )}
            </List>

            {/* Sección para Notas Archivadas */}
            <Divider sx={{ marginTop: 1, marginBottom: 1, backgroundColor: isDarkMode ? '#444' : '#ddd' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px 0', paddingLeft: 2 }}>
                <IconButton onClick={() => setShowArchived(!showArchived)}>
                    {showArchived ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Typography variant="subtitle1">Notas Archivadas</Typography>
            </Box>
            {showArchived && (
                <List>
                    {archivedNotes.length > 0 ? (
                        archivedNotes.map(note => (
                            <ListItem key={note.id} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={note.title} />
                                    <IconButton>
                                        <Archive />
                                    </IconButton>
                                </ListItemButton>
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ padding: 2 }}>
                            No hay notas archivadas.
                        </Typography>
                    )}
                </List>
            )}
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* Barra de aplicación para el menú de hamburguesa */}
            <AppBar position="fixed" sx={{ display: { sm: 'none' }, backgroundColor: isDarkMode ? '#121212' : '#000' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: isDarkMode ? '#121212' : '#fff' },
                }}
                open
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: isDarkMode ? '#121212' : '#fff' },
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};
