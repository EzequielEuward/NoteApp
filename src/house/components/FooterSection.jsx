import { Box, Typography, Container } from "@mui/material"
import { Link } from "react-router-dom"

export const FooterSection = () => {
  return (
    <>
      <Box component="footer" borderTop={1} borderColor="divider" py={4}>
                <Container maxWidth="lg" display="flex" sx={{ flexDirection: "column" }}>
                    <Typography variant="body2" color="textSecondary">
                        © 2024 NotesApp. Todos los derechos reservados.
                    </Typography>
                    <Box display="flex" gap={2} mt={2}>
                        <Link to="#" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" color="textSecondary" component="span" sx={{ "&:hover": { textDecoration: "underline" } }}>
                                Términos de servicio
                            </Typography>
                        </Link>
                        <Link to="/security-policy" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" color="textSecondary" component="span" sx={{ "&:hover": { textDecoration: "underline" } }}>
                                Privacidad
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
    </>
  )
}

export default FooterSection
