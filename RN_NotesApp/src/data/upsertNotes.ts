import {Note} from '../types';
import {getOperations, setOperations} from './operations';

export const upsertNotes = async (note: Note) => {
  try {
    const notes = await getOperations();
    const existingNote = notes.find((n: Note) => n.id === note.id);
    if (existingNote) {
      editNote(notes, existingNote, note);
    } else {
      addNewNote(notes, note);
    }
  } catch (error) {
    console.log('error upserting note : ', error);
  }
};

const editNote = (notes: Note[], oldNote: Note, newNote: Note) => {
  const currentNotes = notes.filter((n: Note) => n.id !== oldNote.id);
  const newNotes = [...currentNotes, newNote];
  setOperations(newNotes);
  return newNotes;
};

const addNewNote = async (notes: Note[], note: Note) => {
  const newNotes = [...notes, note];
  await setOperations(newNotes);
  return newNotes;
};
