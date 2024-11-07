import { Box, LinearProgress, Typography } from '@mui/material';

export const ProgressBarTodo = ({ todos }) => {
  const completedTasks = todos.filter(todo => todo.completed).length;
  const totalTasks = todos.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Box sx={{ width: '100%', mb: 2, textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Progreso de Tareas: {completedTasks}/{totalTasks}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#388E32', 
          },
        }}
      />
    </Box>
  );
};

export default ProgressBarTodo;
