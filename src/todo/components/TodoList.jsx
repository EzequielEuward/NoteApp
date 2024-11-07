import { Box, Checkbox, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { Delete as DeleteIcon, Archive as ArchiveIcon, PriorityHigh as PriorityHighIcon } from '@mui/icons-material';
import { useState } from 'react';
import { ProgressBarTodo } from './ProgressBarTodo';
import { useDispatch } from 'react-redux';
import { startUpdateTodoPriority } from '../../store/todos/thunk';

export const TodoList = ({ todos, onToggleTodo, onArchiveTodo, onDeleteTodo, onUpdatePriority }) => {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null); // Solo anchorEl en el estado

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget); // Solo establece la posición del menú
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Cierra el menú
  };

  const handleMenuItemClick = (todoId, priority) => {
    dispatch(startUpdateTodoPriority(todoId, priority)); // Llama al thunk con el ID y prioridad
    handleCloseMenu();
  };

  const getBackgroundColor = (priority) => {
    switch (priority) {
      case 'alta':
        return '#FFB3B3';
      case 'media':
        return '#FFD9B3';
      case 'baja':
        return '#E6FFB3';
      default:
        return 'transparent';
    }
  };

  return (
    <Box>
      <ProgressBarTodo todos={todos} />
      {todos.filter(todo => !todo.archived).map((todo) => (
        <Box
          key={todo.id}
          display="flex"
          alignItems="center"
          p={1}
          borderBottom="1px solid #e0e0e0"
          justifyContent="space-between"
          sx={{
            backgroundColor: todo.completed ? '#C8E6C9' : getBackgroundColor(todo.priority),
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Checkbox
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
              color="primary"
            />
            <Typography
              variant="body1"
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#2E7D32' : 'text.primary',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '400px',
              }}
            >
              {todo.text}
            </Typography>
          </Box>
          <Box display="flex" gap={1}>
            <IconButton onClick={handleOpenMenu} sx={{ color: 'black' }}>
              <PriorityHighIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick(todo.id, 'alta')}>Alta</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(todo.id, 'media')}>Media</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(todo.id, 'baja')}>Baja</MenuItem>
            </Menu>

            <IconButton onClick={() => onArchiveTodo(todo.id)} sx={{ color: 'black' }}>
              <ArchiveIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteTodo(todo.id)} sx={{ color: 'black' }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
