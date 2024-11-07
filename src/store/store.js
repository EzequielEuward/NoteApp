import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal';
import { todosSlice } from './todos/todosSlice';
import { uiSlice } from './ui/uiSlice';  

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    todos: todosSlice.reducer,
    ui: uiSlice.reducer,  
  },
});
