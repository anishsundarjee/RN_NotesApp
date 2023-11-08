import React, {useContext} from 'react';
import {AppContext} from '../../hooks/useApp';
import ViewNotesScreen from './viewNotesScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MainNavigator';
import {deleteNotes} from '../../data';
import {useGetNotes} from '../../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewNotes'>;

const ViewNotesPresenter = ({navigation}: Props) => {
  const {setReloadApp, reloadApp} = useContext(AppContext);
  const data = useGetNotes();

  const onPressEdit = (id: string) => {
    navigation.navigate('NoteDetail', {id});
  };

  const onPressDelete = async (id: string) => {
    await deleteNotes(id);
    setReloadApp(reloadApp + 1);
  };

  const onPressAdd = () => {
    navigation.navigate('NoteDetail', {id: undefined});
  };

  const viewNotesScreenProps = {
    data: data,
    onPressEdit,
    onPressDelete,
    onPressAdd,
  };
  return <ViewNotesScreen {...viewNotesScreenProps} />;
};

export default ViewNotesPresenter;
