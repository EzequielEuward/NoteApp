import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from './';
import {
    addTagToActiveNote,
    deleteNoteById,
    removeTagFromActiveNote,
    savingNewNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote
} from './journalSlice';

import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            tags: [],
        }

        const newDoc = doc(collection(FirebaseDB, uid, 'journal', 'notes'));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

// Cargar notas desde Firebase
export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        noteToFireStore.tags = noteToFireStore.tags.filter(tag => tag !== undefined && tag !== null);

        console.log('Nota a guardar:', noteToFireStore);

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(note));
    }
}


export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = files.map(file => fileUpload(file));
        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));
    }
}

export const startAddingTagToActiveNote = (tag) => {
    return async (dispatch, getState) => {
        const { active: note } = getState().journal;
        if (!note || !tag) return; 

        if (tag !== undefined && tag !== null && tag.trim() !== '') {
            dispatch(addTagToActiveNote({ name: tag })); 
            await dispatch(startSaveNote());  
        }
    }
}


export const startRemovingTagFromActiveNote = (tag) => {
    return async (dispatch, getState) => {
        const { active: note } = getState().journal;
        if (!note) return;

        dispatch(removeTagFromActiveNote(tag));

        await dispatch(startSaveNote());
    }
}



export default startNewNote;