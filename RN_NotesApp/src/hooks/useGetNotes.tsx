import {useContext, useEffect, useState} from 'react';
import {getOperations} from '../data';
import {AppContext} from './useApp';
import {Note} from '../types';

export const useGetNotes = () => {
  const {reloadApp} = useContext(AppContext);
  const [notes, setNotes] = useState([] as Note[] | []);

  useEffect(() => {
    const getNotes = async () => {
      const result = await getOperations();
      result?.length > 0 && console.log('getNotes', result);
      setNotes(result);
    };

    getNotes();
  }, [reloadApp]);

  return notes;
};
