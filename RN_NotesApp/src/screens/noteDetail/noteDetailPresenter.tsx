import React, {useState, useContext} from 'react';
import {AppContext} from '../../hooks/useApp';
import {v4 as uuid} from 'uuid';
import NoteDetailScreen from './noteDetailScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MainNavigator';
import {upsertNotes} from '../../data';

type Props = NativeStackScreenProps<RootStackParamList, 'NoteDetail'>;

const NoteDetailPresenter = ({route, navigation}: Props) => {
  const {setReloadApp, reloadApp} = useContext(AppContext);
  const {id} = route.params;
  const [showClientDropDown, setClientShowDropDown] = useState(false);
  const [client, setClient] = useState('');
  const [showCategoryDropDown, setCategoryShowDropDown] = useState(false);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const onPressButton = async () => {
    const noteId = id ? id : uuid();
    const Item = {
      id: noteId,
      client,
      category,
      note,
    };
    await upsertNotes(Item);
    setReloadApp(reloadApp + 1);
    navigation.pop();
  };

  const noteDetailScreenProps = {
    showClientDropDown,
    setClientShowDropDown,
    client,
    setClient,
    showCategoryDropDown,
    setCategoryShowDropDown,
    category,
    setCategory,
    note,
    setNote,
    onPress: onPressButton,
    buttonName: id ? 'Edit Note' : 'Add Note',
    disabled: client === '' || category === '' || note === '',
  };
  return <NoteDetailScreen {...noteDetailScreenProps} />;
};

export default NoteDetailPresenter;
