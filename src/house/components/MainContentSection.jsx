import { Box, Button, Container, Typography } from "@mui/material";
import fondoImage from '../../assets/8290.jpg';

export const MainContentSection = () => {
    return (
        <Box
            py={{ xs: 6, md: 12 }}
            textAlign="center"
            sx={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#262254', 
                position: 'relative',
                width: '100%', 
            }}
        >
            <Container maxWidth="lg"> 
                <Typography variant="h2" component="h1" fontWeight="bold">
                    Tus notas, organizadas
                </Typography>
                <Typography variant="subtitle1" mt={2} mb={4}>
                    Simplifica tu vida con nuestra aplicación de notas intuitiva y muy fácil de usar.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mr: 2,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                >
                    Empezar ahora
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                >
                    Saber más
                </Button>
            </Container>
        </Box>
    );
}

export default MainContentSection;
