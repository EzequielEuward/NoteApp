import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        isSaving: false,
        messageSaved: '',
        todos: [],
        active: null,
    },
    reducers: {
        savingNewTodo: (state) => {
            state.isSaving = true;
        },
        addNewEmptyTodo: (state, action) => {
            state.todos.push(action.payload);
            state.isSaving = false;
        },
        setActiveTodo: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        archiveTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, archived: true } : todo
            );
        },
        unarchiveTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, archived: false } : todo
            );
        },
        updateTodoPriority: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, priority: action.payload.priority }; 
                }
                return todo;
            });
        },
        favoriteTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, favorite: true } : todo
            );
        },
        unfavoriteTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, favorite: false } : todo
            );
        },
        setSavingTodos: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateTodo: (state, action) => {
            state.isSaving = false;
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
            state.messageSaved = `${action.payload.text}, actualizada correctamente`;
        },
        toggleTodoById: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        },
        clearTodosLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.todos = [];
            state.active = null;
        },
        deleteTodoById: (state, action) => {
            state.active = null;
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
});

export const {
    addNewEmptyTodo,
    clearTodosLogout,
    deleteTodoById,
    toggleTodoById,
    savingNewTodo,
    archiveTodo,
    favoriteTodo,
    unfavoriteTodo,
    unarchiveTodo,
    setActiveTodo,
    setTodos,
    setSavingTodos,
    updateTodo,
    updateTodoPriority 
} = todosSlice.actions;
