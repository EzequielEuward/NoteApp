import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PlusIcon from '@mui/icons-material/Add';

export const SidebarPrueba = () => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    const [searchTerm, setSearchTerm] = useState('');
    const [showArchived, setShowArchived] = useState(false);

    // Filtrar notas según el término de búsqueda
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Simular notas archivadas (en un estado real, esto podría ser parte del state global)
    const archivedNotes = notes.filter(note => note.archived);


    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Contenido */}
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {/* Barra lateral */}
                <Paper elevation={3} sx={{ width: 240, flexShrink: 0, borderColor: 'divider', borderRight: '1px solid' }}>
                    <Toolbar>
                        <TextField
                            variant="standard"
                            placeholder="Buscar notas..."
                            InputProps={{ startAdornment: <SearchIcon /> }}
                        />
                    </Toolbar>
                    <Divider />
                    <Button startIcon={<PlusIcon />} fullWidth>
                        Nueva Nota
                    </Button>
                    <List>
                        {/* Notas */}
                        <ListItem button>
                            <ListItemText primary="Nota 1" secondary="Fecha de creación" />
                        </ListItem>
                    </List>
                </Paper>

                {/* Contenido principal */}
                <Container maxWidth="sm" sx={{ flexGrow: 1, padding: 2 }}>
                    {/* Aquí va el contenido principal */}
                </Container>
            </Box>
        </Box>
    );
}

export default SidebarPrueba;