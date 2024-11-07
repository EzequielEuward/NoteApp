import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles, startAddingTagToActiveNote, startRemovingTagFromActiveNote } from '../../store/journal';

import { format } from 'date-fns';
import { ImageGallery, NoteHeader, TagDialog, FormatToolbar } from '../components/';
import { TextField, Typography, Container, Box } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { es } from 'date-fns/locale';
import { useForm } from '../../hooks/useForm';
import { useTheme } from '@emotion/react';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);
    const [fontStyle, setFontStyle] = useState('normal');
    const [fontSize, setFontSize] = useState(16);
    const [tagDialogOpen, setTagDialogOpen] = useState(false);

    // Usar el hook useTheme correctamente
    const theme = useTheme();

    const fileInputRef = useRef();

    const dateString = useMemo(() => format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: es }), [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState, dispatch]);

    useEffect(() => {
        if (messageSaved) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const toggleFontStyle = (style) => {
        setFontStyle((prevStyle) => prevStyle === style ? 'normal' : style);
    };

    const increaseFontSize = () => setFontSize((prev) => prev + 2);
    const decreaseFontSize = () => setFontSize((prev) => (prev > 8 ? prev - 2 : prev));

    const onSaveNote = () => dispatch(startSaveNote());
    const onFileInputChange = ({ target }) => target.files.length && dispatch(startUploadingFiles(target.files));
    const onDelete = () => dispatch(startDeletingNote());

    const handleAddTag = (tag) => {
        dispatch(startAddingTagToActiveNote(tag));
    };

    const handleRemoveTag = (tag) => {
        dispatch(startRemovingTagFromActiveNote(tag));
    };

    return (
        <Container maxWidth="md">
            <NoteHeader />

            <Box
                p={2}
                display="flex"
                flexDirection="column"
                sx={{ gap: { xs: 2, sm: 3 } }}
            >
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    mt={1}
                    mb={2}
                    sx={{ gap: { xs: 1, sm: 2 } }}
                >
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
                            style: {
                                fontSize: { xs: 18, sm: 20 },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,  // Usar el color del tema
                            },
                        }}
                        sx={{
                            mb: { xs: 1, sm: 0 },
                            '& .MuiInputBase-root': {
                                backgroundColor: theme.palette.background.paper,
                            }
                        }}
                    />
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{
                            mt: { xs: 1, sm: 0 },
                            fontSize: { xs: 14, sm: 16 }
                        }}
                    >
                        {dateString}
                    </Typography>
                </Box>

                <hr />

                <FormatToolbar
                    fileInputRef={fileInputRef}
                    onFileInputChange={onFileInputChange}
                    setBold={() => toggleFontStyle('bold')}
                    setItalic={() => toggleFontStyle('italic')}
                    setStrikethrough={() => toggleFontStyle('line-through')}
                    setNormal={() => toggleFontStyle('normal')}
                    increaseFontSize={increaseFontSize}
                    decreaseFontSize={decreaseFontSize}
                    fontStyle={fontStyle}
                    setTagDialogOpen={setTagDialogOpen}
                    onSaveNote={onSaveNote}
                    onDelete={onDelete}
                    isSaving={isSaving}
                    sx={{ mb: { xs: 1, sm: 2 } }}
                />

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
                            fontSize: fontSize,
                            fontWeight: fontStyle === 'bold' ? 'bold' : 'normal',
                            fontStyle: fontStyle === 'italic' ? 'italic' : 'normal',
                            textDecoration: fontStyle === 'line-through' ? 'line-through' : 'none',
                        },
                    }}
                    sx={{
                        fontSize: { xs: 14, sm: 16 }  // Ajuste de tamaño en dispositivos móviles
                    }}
                />
            </Box>

            <ImageGallery images={note.imageUrls} />
            <TagDialog
                open={tagDialogOpen}
                onClose={() => setTagDialogOpen(false)}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
                currentTags={note?.tags || []}
            />
        </Container>
    );
};

export default NoteView;
