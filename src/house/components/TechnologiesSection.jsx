import React from 'react';
import { Box, Container, Typography, Grid, SvgIcon } from '@mui/material';
import ReactIcon from '@mui/icons-material/Code'; // Asegúrate de que estos íconos existan y son correctos
import FirebaseIcon from '@mui/icons-material/Cloud';
import MaterialUIIcon from '@mui/icons-material/FormatColorFill';
import ReduxIcon from '@mui/icons-material/Storage'; // O cualquier icono que represente Redux
import TrelloIcon from '@mui/icons-material/Assignment'; // O cualquier icono que represente Trello

export const TechnologiesSection = () => {
  return (
    <Box py={{ xs: 6, md: 12 }} bgcolor="white"> {/* Cambia el color de fondo si lo deseas */}
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Tecnologías utilizadas
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'blue' }}>
              <ReactIcon />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">React</Typography>
            <Typography color="textSecondary">
              Biblioteca de JavaScript para construir interfaces de usuario interactivas.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'yellow' }}>
              <FirebaseIcon />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">Firebase</Typography>
            <Typography color="textSecondary">
              Plataforma de desarrollo de aplicaciones que proporciona una base de datos en tiempo real y autenticación.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'blue' }}>
              <MaterialUIIcon />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">Material UI</Typography>
            <Typography color="textSecondary">
              Biblioteca de componentes de React que implementa Material Design.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6} mt={6} justifyContent="center">
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'purple' }}>
              <ReduxIcon />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">Redux</Typography>
            <Typography color="textSecondary">
              Biblioteca para gestionar el estado de las aplicaciones JavaScript, mejorando el rendimiento y la organización del código.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'green' }}>
              <TrelloIcon />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">Trello</Typography>
            <Typography color="textSecondary">
              Herramienta de gestión de proyectos basada en la metodología Kanban, utilizada para organizar tareas y seguir el progreso del desarrollo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container direction="column" alignItems="center" textAlign="center">
            <SvgIcon sx={{ fontSize: 64, color: 'orange' }}>
              <path d="M3.89 15.672L6.255 17.5h11.49l2.365-1.828L21 8.5h-3l-2 1.5H7.99L6 8.5H3l.89 7.172zm17.45 2.328l-2.25 1.734L19.5 20H4.5l.41-.266L2.66 18l-.984-8H.5v-2h3.064l1.28 1h14.312l1.28-1H23.5v2h-1.176l-.984 8z" />
            </SvgIcon>
            <Typography variant="h5" fontWeight="bold">Otras Tecnologías</Typography>
            <Typography color="textSecondary">
              Empleamos bibliotecas más ligeras para optimizar nuestra aplicación y mejorar la eficiencia en tareas específicas.
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;
