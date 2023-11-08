import AsyncStorage from '@react-native-async-storage/async-storage';
import {Note} from '../types';

export const getOperations = async (): Promise<Note[]> => {
  try {
    const notes: string | null = await AsyncStorage.getItem('notes');
    return notes != null ? JSON.parse(notes) : [];
  } catch (e: any) {
    console.log(e);
    return [];
  }
};

export const setOperations = async (notes: Note[]): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(notes);
    await AsyncStorage.setItem('notes', jsonValue);
  } catch (e: any) {
    console.log(e);
  }
};
