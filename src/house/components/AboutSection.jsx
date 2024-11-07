import { Box, Container, Grid, Typography, Card, CardContent, CardActions, IconButton, Avatar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DiscordIcon from '@mui/icons-material/EmojiEmotions'; 
import DeveloperEzeImage from '../../assets/eze.jpg';
import DeveloperLeoImage from '../../assets/leo.jpg';

export const AboutSection = () => {
  const developers = [
    {
      name: "Ezequiel Euward",
      role: "Desarrollador full-stack con experiencia en React y Node.js. Enfocado en optimización de recursos de la aplicación.",
      github: "https://github.com/EzequielEuward",
      linkedin: "https://www.linkedin.com/in/ezequiel-euward/",
      whatsapp: "#",
      discord: "#",
      img: DeveloperEzeImage, 
    },
    {
      name: "Leonel Euward",
      role: "Especialista en backend y bases de datos. Enfocado en la optimización y seguridad de la aplicación.",
      github: "https://github.com/LeoEuw",
      linkedin: "https://www.linkedin.com/in/leoeuw/",
      whatsapp: "#",
      discord: "#",
      img: DeveloperLeoImage,
    }
  ];

  return (
    <Box id="about" py={{ xs: 6, md: 12 }} textAlign="center">
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Acerca de los desarrolladores
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth="sm" mx="auto" mb={4}>
          NotesApp fue desarrollada por dos hermanos apasionados por la tecnología y la productividad:
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {developers.map((dev, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  maxWidth: 345, 
                  mx: "auto", 
                  transition: "transform 0.3s", 
                  '&:hover': { transform: "scale(1.05)" } 
                }}
                raised
              >
                <Avatar
                  src={dev.img}
                  alt={dev.name}
                  sx={{ width: 100, height: 100, mx: "auto", mt: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{dev.name}</Typography>
                  <Typography color="textSecondary">{dev.role}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <IconButton href={dev.github} target="_blank" color="primary">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={dev.linkedin} target="_blank" color="primary">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href={dev.whatsapp} target="_blank" color="primary">
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton href={dev.discord} target="_blank" color="primary">
                    <DiscordIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
