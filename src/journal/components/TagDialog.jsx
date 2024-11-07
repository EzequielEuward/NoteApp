import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startAddingTagToActiveNote, startRemovingTagFromActiveNote } from '../../store/journal';

export const TagDialog = ({ open, onClose, onAddTag, onRemoveTag, currentTags }) => {
    const [newTag, setNewTag] = useState('');
    const [tagsInNote, setTagsInNote] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setTagsInNote(currentTags || []);
    }, [currentTags]);

    // Agregar etiqueta
    const handleAddTag = () => {
        if (newTag && newTag.trim() !== '') {
            dispatch(startAddingTagToActiveNote(newTag));
            setNewTag('');
            onClose(); 
        }
    };

    // Eliminar etiqueta
    const handleRemoveTag = (tag) => {
        dispatch(startRemovingTagFromActiveNote(tag));
        setTagsInNote((prev) => prev.filter((t) => t !== tag));
        onClose(); 
    };

    const handleCheckboxChange = (tag) => {
        const updatedTags = tagsInNote.includes(tag)
            ? tagsInNote.filter((t) => t !== tag) 
            : [...tagsInNote, tag]; 

        setTagsInNote(updatedTags);

        if (updatedTags.includes(tag)) {
            dispatch(startAddingTagToActiveNote(tag)); 
        } else {
            dispatch(startRemovingTagFromActiveNote(tag)); 
        }

        onClose(); 
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Administrar Etiquetas</DialogTitle>
            <DialogContent>
                {/* Mostrar etiquetas de la nota */}
                {tagsInNote.map((tag, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={tagsInNote.includes(tag)}
                                    onChange={() => handleCheckboxChange(tag)}
                                />
                            }
                            label={tag}
                        />
                        <IconButton onClick={() => handleRemoveTag(tag)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                ))}

                <TextField
                    label="Nueva etiqueta"
                    variant="outlined"
                    fullWidth
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    sx={{ mt: 2 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancelar</Button>
                <Button onClick={handleAddTag} color="primary">Agregar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TagDialog;
