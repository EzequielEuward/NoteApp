import { Button, TextField, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { DefaultTodoDialog } from './';

export const TodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [category, setCategory] = useState('estudio');
  const [error, setError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [defaultTodos, setDefaultTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setError('El campo de tarea no puede estar vacío.');
      return;
    }
    onAddTodo(newTodo, category); 
    setNewTodo('');
    setCategory('estudio');
    setError('');
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = (selectedTodos) => {
    setDefaultTodos(selectedTodos);
    setDialogOpen(false);
  };

  return (
    <Box display="flex" gap={1} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
      <TextField
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea"
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error}
      />
      <Button
        onClick={handleAddTodo}
        variant="contained"
        sx={{
          minWidth: '20px',
          borderRadius: '50px',
          padding: 2,
          '&:hover': {
            backgroundColor: 'secondary.main',
          },
        }}
      >
        <Add />
      </Button>

      <DefaultTodoDialog open={dialogOpen} onClose={handleCloseDialog} />
    </Box>
  );
};

export default TodoForm;
