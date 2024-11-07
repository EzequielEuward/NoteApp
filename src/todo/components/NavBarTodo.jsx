import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography, Button, Box } from '@mui/material';
import { LogoutOutlined, Menu as MenuIcon } from '@mui/icons-material';
import { startLogout } from '../../store/auth';
// Icons
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggleDarkMode } from '../../store/ui/uiSlice'; 

export const NavBarTodo = ({ drawerWidth = 250 }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.ui); 

  const onLogout = () => {
    dispatch(startLogout());
  };

  const handleModeChange = () => {
    dispatch(toggleDarkMode()); 
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: isDarkMode ? 'primary.dark' : 'primary.main', 
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            NoteApp
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              startIcon={isDarkMode ? <DarkModeIcon /> : <WbSunnyIcon />}
              color="inherit"
              onClick={handleModeChange}
            >
              {isDarkMode ? '' : ''}
            </Button>
            <IconButton color="error" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTodo;
