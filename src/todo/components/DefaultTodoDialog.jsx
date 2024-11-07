import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Checkbox, FormControlLabel } from '@mui/material';
import { startAddDefaultTodos } from '../../store/todos/thunk'; 
import {defaultTodosByCategory} from '../../helpers/';


export const DefaultTodoDialog = ({ open, onClose }) => {
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [scroll, setScroll] = useState('paper');
  const descriptionElementRef = useRef(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleToggleTodo = (todo) => {
    setSelectedTodos((prevSelected) => 
      prevSelected.includes(todo) ? prevSelected.filter((t) => t !== todo) : [...prevSelected, todo]
    );
  };

  const handleConfirm = () => {
    dispatch(startAddDefaultTodos(selectedTodos)); 
    onClose(selectedTodos);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => onClose([])}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Selecciona los Todos por Defecto</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {Object.keys(defaultTodosByCategory).map((category) => (
              <div key={category}>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                {defaultTodosByCategory[category].map((todo) => (
                  <FormControlLabel
                    key={todo}
                    control={
                      <Checkbox
                        checked={selectedTodos.includes(todo)}
                        onChange={() => handleToggleTodo(todo)}
                      />
                    }
                    label={todo}
                  />
                ))}
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose([])}>Cancelar</Button>
          <Button onClick={handleConfirm}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DefaultTodoDialog;
