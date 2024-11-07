import React, { useState, useEffect } from 'react';
import { Box, Divider, Drawer, Toolbar, Typography, InputBase, IconButton, AppBar, CssBaseline, List, ListItem, ListItemText, Collapse, Dialog } from '@mui/material';
import { Search, ExpandMore, ExpandLess, Menu as MenuIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { startLoadingTodos } from '../../store/todos/thunk';
import { DialogTodo } from './DialogTodo';

export const SideBarTodo = ({ drawerWidth = 280 }) => {
  const dispatch = useDispatch();
  const { displayName } = useSelector(state => state.auth);
  const todos = useSelector(state => state.todos.todos);
  const [searchTerm, setSearchTerm] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [openTodoDialog, setOpenTodoDialog] = useState(false);

  useEffect(() => {
    dispatch(startLoadingTodos());
  }, [dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const archivedTodos = todos.filter(todo => todo.archived);

  const activeTodos = todos.filter(todo => !todo.archived);

  const filteredActiveTodos = activeTodos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setOpenTodoDialog(true);
  };

  const handleDialogClose = (updatedTodo) => {
    setOpenTodoDialog(false);
    if (updatedTodo) {
      console.log('Updated Todo:', updatedTodo);
    }
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Tareas de {displayName}
        </Typography>
      </Toolbar>
      <Divider />

      <Box sx={{ display: 'flex', alignItems: 'center', margin: 2 }}>
        <InputBase
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startAdornment={<Search sx={{ marginRight: 1, color: 'action.active' }} />}
          sx={{
            flex: 1,
            padding: '4px 8px',
            borderRadius: 1,
            border: '1px solid #ddd',
            backgroundColor: '#fff',
          }}
        />
        <IconButton sx={{ ml: 1 }}>
          <Search />
        </IconButton>
      </Box>

      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

      {/* Mostrar todos activos */}
      <Typography variant="subtitle1" sx={{ paddingLeft: 2 }}>Tareas Activas</Typography>
      <List>
        {filteredActiveTodos.map(todo => (
          <ListItem key={todo.id} button onClick={() => handleTodoClick(todo)}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px 0', paddingLeft: 2 }}>
        <IconButton onClick={() => setShowArchived(!showArchived)}>
          {showArchived ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Typography variant="subtitle1">Tareas Archivadas</Typography>
      </Box>
      <Collapse in={showArchived} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {archivedTodos.map(todo => (
            <ListItem key={todo.id} sx={{ pl: 4 }} button onClick={() => handleTodoClick(todo)}>
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ display: { sm: 'none' }, backgroundColor: '#000' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Tareas
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer permanente y móvil */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Modal para detalles del todo */}
      {selectedTodo && (
        <DialogTodo
          open={openTodoDialog}
          onClose={handleDialogClose}
          todo={selectedTodo}
        />
      )}
    </Box>
  );
};

export default SideBarTodo;
