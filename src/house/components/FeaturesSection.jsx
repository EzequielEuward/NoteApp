import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const featuresData = [
    {
        title: 'Seguridad en login',
        description: 'Autenticación robusta para proteger tus datos personales.',
        icon: LockIcon,
    },
    {
        title: 'Robustez en lógica',
        description: 'Algoritmos eficientes para un rendimiento óptimo.',
        icon: FlashOnIcon,
    },
    {
        title: 'Clean Code',
        description: 'Código limpio y mantenible para una mejor experiencia de desarrollo.',
        icon: CodeIcon,
    },
    {
        title: 'Sincronización en la nube',
        description: 'Accede a tus notas desde cualquier dispositivo, en cualquier momento.',
        icon: CloudQueueIcon,
    },
];

export const FeaturesSection = () => {
    return (
        <Box sx={{ width: '100%', py: { xs: 12, md: 24, lg: 32 }, bgcolor: 'grey.100' }}> {/* Cambiado a 'grey.100' */}
            <Container sx={{ px: { xs: 4, md: 6 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '3xl', sm: '5xl' }, fontWeight: 'bold', textAlign: 'center', mb: 12 }}>
                    Características principales
                </Typography>
                <Grid container spacing={6}>
                    {featuresData.map((feature) => (
                        <Grid item xs={12} sm={6} md={3} key={feature.title}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4 }}>
                                <feature.icon sx={{ fontSize: 48, color: 'primary.main' }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturesSection;
