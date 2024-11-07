import { Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavBarTodo, SideBarTodo } from '../components';

const drawerWidth = 280;

export const TodoLayout = ({ children }) => {
  const { isDarkMode } = useSelector(state => state.ui); // Obtener el estado de dark mode desde Redux
  
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
      
      {/* Pasar el estado de dark mode a los componentes NavBarTodo y SideBarTodo */}
      <NavBarTodo drawerWidth={drawerWidth} isDarkMode={isDarkMode} />

      <SideBarTodo drawerWidth={drawerWidth} isDarkMode={isDarkMode} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: { sm: `${drawerWidth}px` },
          backgroundColor: isDarkMode ? '#121212' : '#fff', // Cambiar el fondo dependiendo del modo
          color: isDarkMode ? '#fff' : '#000', // Cambiar el color del texto dependiendo del modo
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default TodoLayout;
