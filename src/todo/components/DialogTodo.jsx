import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { startUpdateTodoPriority, startSaveTodo } from '../../store/todos/thunk';

export const DialogTodo = ({ open, onClose, todo }) => {
    const dispatch = useDispatch();

    const [priority, setPriority] = useState(todo.priority);
    const [title, setTitle] = useState(todo.text);

    useEffect(() => {
        if (todo) {
            setPriority(todo.priority);
            setTitle(todo.text);
        }
    }, [todo]);

    const handlePriorityChange = (event) => {
        const newPriority = event.target.value;
        if (newPriority !== priority) { 
            setPriority(newPriority);
            dispatch(startUpdateTodoPriority(todo.id, newPriority));
        }
    };

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        if (newTitle !== title) { 
            setTitle(newTitle);
            dispatch(startSaveTodo({ ...todo, text: newTitle }));
        }
    };
    const handleSave = () => {
        dispatch(startSaveTodo({ ...todo, text: title, priority }));
        onClose();
    };


    return (
        <Dialog open={open} onClose={() => onClose(null)} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ backgroundColor: '#3f51b5', color: '#fff' }}>Tarea Detalle</DialogTitle>
            <DialogContent sx={{ padding: 3 }}>
                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="h6">Descripción:</Typography>
                    <TextField
                        value={title}
                        onChange={handleTitleChange} 
                        variant="outlined"
                        fullWidth
                        placeholder="Ingrese el título de la tarea"
                        sx={{ marginTop: 1 }}
                    />
                </Box>

                <Typography variant="h6" sx={{ marginTop: 2 }}>Detalles:</Typography>
                <Typography variant="body1">
                    Fecha: {todo.date ? format(new Date(todo.date), 'dd/MM/yyyy HH:mm') : 'Sin fecha'}
                </Typography>
                <Typography variant="body1">Completado: {todo.completed ? 'Sí' : 'No'}</Typography>
                <Typography variant="body1">Archivado: {todo.archived ? 'Sí' : 'No'}</Typography>
                <Typography variant="body1">Favorito: {todo.favorite ? 'Sí' : 'No'}</Typography>
                <Typography variant="body1">Etiquetas: {todo.tags.join(', ') || 'Ninguna'}</Typography>

                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Prioridad</InputLabel>
                    <Select value={priority} onChange={handlePriorityChange}>
                        <MenuItem value="alta">Alta</MenuItem>
                        <MenuItem value="media">Media</MenuItem>
                        <MenuItem value="baja">Baja</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(null)} color="secondary">Cerrar</Button>
                <Button onClick={handleSave} color="primary">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogTodo;