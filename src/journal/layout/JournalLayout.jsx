import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';
import { AppTheme } from '../../theme';  // Asegúrate de importar el AppTheme

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <AppTheme>  
      <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
        <NavBar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} /> 

        <Box
          component='main'
          sx={{
            flexGrow: 1,
            marginLeft: { sm: `${drawerWidth}px` },
            marginTop: { xs: 2, sm: 4 },
          }}
        >
          <Toolbar /> 
          {children}
        </Box>
      </Box>
    </AppTheme>
  );
};
