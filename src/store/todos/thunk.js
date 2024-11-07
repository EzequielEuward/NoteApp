

import { collection, doc, setDoc } from 'firebase/firestore/';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyTodo, deleteTodoById, savingNewTodo, setActiveTodo, setTodos, toggleTodoById, unarchiveTodo, archiveTodo, unfavoriteTodo, favoriteTodo, updateTodo, updateTodoPriority, setSavingTodos } from './todosSlice';
import { deleteDoc, getDocs } from 'firebase/firestore';

export const startNewTodo = (todoText, priority) => {
    return async (dispatch, getState) => {
        dispatch(savingNewTodo());

        const { uid } = getState().auth;
        const newTodo = {
            text: todoText,
            completed: false,
            date: new Date().getTime(),
            priority: priority,
            archived: false,
            favorite: false,
            tags: [],
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/todos`));
        await setDoc(newDoc, newTodo);

        newTodo.id = newDoc.id;
        dispatch(addNewEmptyTodo(newTodo));
        dispatch(setActiveTodo(newTodo));
    };
};

export const startToggleTodo = (id) => {
    return async (dispatch) => {
        dispatch(toggleTodoById(id));
    };
};

export const loadTodos = async (uid) => {
    const todosSnap = await getDocs(collection(FirebaseDB, `${uid}/journal/todos`));
    const todos = [];

    todosSnap.forEach((doc) => {
        todos.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return todos;
};


export const startLoadingTodos = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const todos = await loadTodos(uid);
        dispatch(setTodos(todos));
    }
}


export const startSaveTodo = (updatedTodo) => {
    return async (dispatch, getState) => {
        dispatch(setSavingTodos());

        const { uid } = getState().auth;
        const { active: todo } = getState().journal;

        const todoToFireStore = { ...updatedTodo };
        delete todoToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${updatedTodo.id}`);
        await setDoc(docRef, todoToFireStore, { merge: true });

        dispatch(updateTodo(updatedTodo));
    };
};


export const startDeletingTodos = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await deleteDoc(docRef);

        dispatch(deleteTodoById(id));
    };
};

export const startArchiveTodo = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await setDoc(docRef, { archived: true }, { merge: true });

        dispatch(archiveTodo(id));
    };
};

export const startUnarchiveTodo = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await setDoc(docRef, { archived: false }, { merge: true });

        dispatch(unarchiveTodo(id));
    };
};

export const startFavoriteTodo = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await setDoc(docRef, { archived: true }, { merge: true });

        dispatch(favoriteTodo(id));
    };
};

export const startUnfavoriteTodo = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await setDoc(docRef, { archived: false }, { merge: true });

        dispatch(unfavoriteTodo(id));
    };
};

export const startUpdateTodoPriority = (id, priority) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/journal/todos/${id}`);
        await setDoc(docRef, { priority: priority }, { merge: true });

        dispatch(updateTodoPriority({ id, priority }));
    };
};

export const startAddDefaultTodos = (selectedTodos) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('No se encontró el UID del usuario');

        const todosCollection = collection(FirebaseDB, `${uid}/journal/todos`);
        
        const currentTodos = getState().todos.todos;

        const newTodos = selectedTodos.map(todoText => ({
            text: todoText,
            completed: false,
            priority: 'media',
            tags: []
        }));

        const uniqueTodos = newTodos.filter(newTodo =>
            !currentTodos.some(existingTodo => existingTodo.text === newTodo.text)
        );

        const promises = uniqueTodos.map(async (todo) => {
            const newDocRef = doc(todosCollection);
            await setDoc(newDocRef, todo);
            return { id: newDocRef.id, ...todo };
        });

        const todosWithIds = await Promise.all(promises);
        const combinedTodos = [...currentTodos, ...todosWithIds];

        dispatch(setTodos(combinedTodos));
    };
};


export default startNewTodo;
