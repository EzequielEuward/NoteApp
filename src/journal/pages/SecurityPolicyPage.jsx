import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography, Box, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';
import ServerIcon from '@mui/icons-material/Storage';
import FileCheckIcon from '@mui/icons-material/CheckCircle';

export const SecurityPolicy = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Header - solo botón de regreso */}
            <header style={{ padding: "16px 24px", display: "flex", alignItems: "center", backgroundColor: "#262254 " }}>
                <Link to="/" style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}>
                    <LockIcon fontSize="large" />
                    <Typography variant="h6" style={{ marginLeft: "8px" }}>Volver</Typography>
                </Link>
            </header>

            <main style={{ flex: 1 }}>
                {/* Sección de introducción */}
                <section style={{ padding: "48px 0", backgroundColor: "#e3f2fd" }}>
                    <Container maxWidth="md" align="center">
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            Políticas de Seguridad
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" align="left" style={{ marginBottom: "16px" }}>
                            <span style={{ color: "#262254", fontWeight: "bold" }}>En NotesApp</span>, la <span style={{ color: "#3a3ab1", fontWeight: "bold" }}>seguridad de tus datos</span> es nuestro <span style={{ color: "#262254", fontWeight: "bold" }}>compromiso absoluto</span>. Nos esforzamos por proteger toda tu información con una combinación de <span style={{ color: "#3a3ab1", fontWeight: "bold" }}>tecnología avanzada</span> y <span style={{ color: "#5a5aff" }}>protocolos de seguridad</span> que están a la vanguardia.
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary" align="left" style={{ marginBottom: "16px" }}>
                            <span style={{ color: "#262254", fontWeight: "bold" }}>Nuestro enfoque</span> es claro: cada <span style={{ color: "#f0c75e", fontWeight: "bold" }}>NOTA</span> y dato está resguardado mediante <span style={{ color: "#3a3ab1", fontWeight: "bold" }}>encriptación de extremo a extremo</span>, asegurando que solo tú puedas acceder a tu información, y que incluso nosotros no tengamos acceso.
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary" align="left" style={{ marginBottom: "16px" }}>
                            Con <span style={{ color: "#5a5aff", fontWeight: "bold" }}>autenticación de dos factores</span> y auditorías de seguridad regulares, nos aseguramos de que la protección de tu cuenta esté siempre actualizada. Nos tomamos muy en serio tu <span style={{ color: "#4caf50", fontWeight: "bold" }}>PRIVACIDAD</span> y <span style={{ color: "#5a5aff", fontWeight: "bold" }}>TRANQUILIDAD</span>.
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary" align="left">
                            Conoce cómo <span style={{ color: "#3a3ab1", fontWeight: "bold" }}>cuidamos de tus datos</span> y descubre el compromiso que hemos asumido en NotesApp para garantizar que tus <span style={{ color: "#f0c75e", fontWeight: "bold" }}>NOTAS</span> estén siempre protegidas. Porque tu confianza es nuestro mayor activo.
                        </Typography>


                    </Container>
                </section>

                {/* Sección de políticas */}
                <section style={{ padding: "48px 0", backgroundColor: "#fff" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} justifyContent="center">
                            {[
                                { icon: <LockIcon />, title: "Encriptación de Datos", subheader: "Tus notas están seguras con nosotros", text: "Utilizamos encriptación de extremo a extremo para asegurar que solo tú puedas acceder a tus notas." },
                                { icon: <VisibilityIcon />, title: "Autenticación de Dos Factores", subheader: "Doble capa de seguridad", text: "Ofrecemos autenticación de dos factores para añadir una capa extra de seguridad a tu cuenta." },
                                { icon: <RefreshIcon />, title: "Actualizaciones Regulares", subheader: "Siempre a la vanguardia", text: "Realizamos actualizaciones regulares de seguridad para protegerte contra nuevas amenazas." }
                            ].map((card, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <Card
                                        style={{
                                            transition: "transform 0.3s ease",
                                            transform: "scale(1)",
                                            cursor: "pointer",
                                            padding: "24px",
                                            minHeight: "250px",
                                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                            backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#e8f5e9" // Alternar colores pastel
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        <CardHeader
                                            avatar={<IconButton color="primary">{card.icon}</IconButton>}
                                            title={<Typography variant="h6" fontWeight="bold">{card.title}</Typography>}
                                            subheader={<Typography color="textSecondary">{card.subheader}</Typography>}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">{card.text}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </section>




                {/* Sección de compromiso */}
                <section style={{ padding: "48px 0", backgroundColor: "#e3f2fd" }}>
                    <Container maxWidth="md">
                        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                            Nuestro Compromiso
                        </Typography>
                        <Grid container spacing={4}>
                            {[{
                                icon: <ServerIcon />, title: "Servidores Seguros", text: "Nuestros servidores están protegidos con las últimas medidas de seguridad y son monitoreados 24/7."
                            }, {
                                icon: <FileCheckIcon />, title: "Auditorías Regulares", text: "Realizamos auditorías de seguridad regulares para garantizar la protección continua de nuestros sistemas."
                            }].map((item, index) => (
                                <Grid item xs={12} md={6} align="center" key={index}>
                                    <IconButton color="primary" fontSize="large">{item.icon}</IconButton>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                                    <Typography color="textSecondary">{item.text}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </section>

                {/* Sección de contacto */}
                <section id="contact" style={{ padding: "48px 0", backgroundColor: "#fff" }}>
                    <Container maxWidth="md" align="center">
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            ¿Tienes preguntas sobre seguridad?
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" paragraph>
                            Nuestro equipo de seguridad está aquí para ayudarte. No dudes en contactarnos si tienes alguna pregunta o inquietud.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Contactar al Equipo de Seguridad
                        </Button>
                    </Container>
                </section>
            </main>

            {/* Footer */}
            <footer style={{ padding: "16px 24px", backgroundColor: "#262254 ", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="caption">
                    © 2024 NotesApp. Todos los derechos reservados.
                </Typography>
                <nav style={{ display: "flex", gap: "16px" }}>
                    <Link to="#" style={{ textDecoration: "none", color: "white" }}>Términos de Servicio</Link>
                    <Link to="#" style={{ textDecoration: "none", color: "white" }}>Política de Privacidad</Link>
                </nav>
            </footer>
        </Box>
    );
};

export default SecurityPolicy;