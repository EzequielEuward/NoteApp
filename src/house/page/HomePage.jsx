import { Typography, Container, Box, Button, TextField } from "@mui/material";
import { NavegacionHomePage, FeaturesSection, AboutSection, MainContentSection, FooterSection, TechnologiesSection, ContactFormSection } from '../components';

export const HomePage = () => {

    return (
        <Box display="flex" minHeight="100vh" sx={{ flexDirection: "column" }}>
            {/* Topbar */}
            <NavegacionHomePage />

            {/* Main content */}
            <Box component="main" flexGrow={1}>
                {/* Hero Section */}
                <MainContentSection />
                {/* Features Section */}
                <FeaturesSection />
                {/* Tecnologias Section */}
                <TechnologiesSection />
                {/* About Section */}
                <AboutSection />

                {/* Contact Form Section */}
                <ContactFormSection />

                {/* Final CTA Section */}
                <Box py={{ xs: 6, md: 12 }} textAlign="center">
                    <Container maxWidth="sm">
                        <Typography variant="h4" component="h2" fontWeight="bold">
                            Descubre el poder de la organización
                        </Typography>
                        <Typography variant="body1" color="textSecondary" mt={2}>
                            Con NotesApp, tus ideas estarán siempre al alcance de tu mano, organizadas y listas para inspirarte.
                        </Typography>
                    </Container>
                </Box>
            </Box>

            {/* Footer */}
            <FooterSection />
        </Box>
    );
}

export default HomePage;
