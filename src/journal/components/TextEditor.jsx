import { TextField, Typography, Box } from '@mui/material';

export const TextEditor = ({ title, dateString, body, onInputChange, fontSize, fontStyle }) => (
    <>
        <Box p={2}>
            <TextField
                type="text"
                variant="standard"
                placeholder="Ingrese un título"
                fullWidth
                name="title"
                value={title}
                onChange={onInputChange}
                InputProps={{
                    disableUnderline: true,
                    style: { fontSize: 20, fontWeight: 'bold' },
                }}
            />
            <Typography variant="body1" color="textSecondary">
                {dateString}
            </Typography>
            <TextField
                variant="filled"
                placeholder="¿Qué sucedió en el día de hoy?"
                multiline
                minRows={8}
                name="body"
                value={body}
                onChange={onInputChange}
                fullWidth
                InputProps={{
                    style: {
                        fontSize,
                        fontWeight: fontStyle === 'bold' ? 'bold' : 'normal',
                        fontStyle: fontStyle === 'italic' ? 'italic' : 'normal',
                        textDecoration: fontStyle === 'line-through' ? 'line-through' : 'none',
                        minHeight: '120px', 
                    },
                }}
            />
        </Box>
    </>
);

export default TextEditor;
