import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const NavegacionHomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth/login');
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box display={{ xs: "none", md: "flex" }} mr={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white" fontWeight="bold">
                  NotesApp
                </Typography>
              </Link>
              <Box display="flex" ml={6}>
                <Link to="#features" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="white" sx={{ ml: 2 }}>
                    Características
                  </Typography>
                </Link>
                <Link to="#notes" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="white" sx={{ ml: 2 }}>
                    Notas
                  </Typography>
                </Link>
                <Link to="#about" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="white" sx={{ ml: 2 }}>
                    Acerca de
                  </Typography>
                </Link>
                <Link to="#contact" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="white" sx={{ ml: 2 }}>
                    Contáctanos
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: 'auto',
                px: 3,
                backgroundColor: '#1976d2', 
                color: 'white',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                '&:hover': {
                  backgroundColor: '#115293', 
                  transform: 'scale(1.05)', 
                },
                '&:active': {
                  transform: 'scale(0.95)', 
                },
              }}
              onClick={handleLoginClick}
            >
              Iniciar sesión
            </Button>
            <Button variant="outlined" sx={{ ml: 2, display: { xs: "flex", md: "none" } }}>
              <MenuIcon />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavegacionHomePage;
