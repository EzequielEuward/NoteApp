import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startNewTodo, startToggleTodo, startDeletingTodos, startLoadingTodos, startArchiveTodo, startUnarchiveTodo, startAddDefaultTodos } from '../../store/todos/thunk';
import Swal from 'sweetalert2';
import { AppBar, Tabs, Tab, Typography, IconButton, Container, Box, Collapse, Button } from '@mui/material';
import { TodoForm, TodoList, TodoStats } from '../components/';
import { Unarchive } from '@mui/icons-material';

export const TodoView = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [showArchived, setShowArchived] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(startLoadingTodos());
  }, [dispatch]);

  const goToNotes = () => {
    navigate('/noteApp');
  };

  const addTodo = (newTodo, priority) => {
    dispatch(startNewTodo(newTodo, priority));
  };

  const toggleTodo = (id) => {
    dispatch(startToggleTodo(id));
  };

  const archiveTodo = (id) => {
    dispatch(startArchiveTodo(id));
  };

  const unarchiveTodo = (id) => {
    dispatch(startUnarchiveTodo(id));
  };

  const deleteTodo = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta tarea se eliminará permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingTodos(id));
        Swal.fire('¡Eliminado!', 'La tarea ha sido eliminada.', 'success');
      }
    });
  };

  const addDefaultTodos = () => {
    dispatch(startAddDefaultTodos());
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, pb: 4 }}>
      <AppBar position="static" color="default">
        <Tabs value={1} textColor="inherit" indicatorColor="secondary" aria-label="Tabs de notas">
          <Tab label="Notas" onClick={goToNotes} />
          <Tab label="To-Do" />
        </Tabs>
      </AppBar>

      <Box mt={3} display="flex" flexDirection="column" gap={3} width="100%">
        <TodoStats total={todos.length} completed={completedTodos} pending={pendingTodos} />

        <TodoForm onAddTodo={addTodo} />

        <Button onClick={addDefaultTodos} variant="contained" color="primary">
          Añadir Todos por defecto
        </Button>

        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onArchiveTodo={archiveTodo}
          onDeleteTodo={deleteTodo}
        />

        <Button onClick={() => setShowArchived(!showArchived)}>
          {showArchived ? 'Ocultar Archivados' : 'Mostrar Archivados'}
        </Button>
        <Collapse in={showArchived}>
          <Box mt={2}>
            {todos.filter(todo => todo.archived).map((todo) => (
              <Box key={todo.id} display="flex" alignItems="center" p={1} borderBottom="1px solid #e0e0e0" justifyContent="space-between" sx={{ backgroundColor: '#f0f0f0' }}>
                <Typography variant="body1">{todo.text}</Typography>
                <IconButton onClick={() => unarchiveTodo(todo.id)} sx={{ color: 'black' }}>
                  <Unarchive />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Container>
  );
};

export default TodoView;
