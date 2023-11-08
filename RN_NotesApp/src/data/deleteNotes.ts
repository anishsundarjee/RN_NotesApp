import {Note} from '../types';
import {getOperations, setOperations} from './operations';

export const deleteNotes = async (id: string) => {
  try {
    const notes = await getOperations();
    const newNotes = notes.filter((note: Note) => note.id !== id);
    await setOperations(newNotes);
    return newNotes;
  } catch (error) {
    console.log('error deleting note : ', error);
  }
};
