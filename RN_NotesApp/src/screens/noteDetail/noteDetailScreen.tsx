import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {TopLevelContainer} from '../../components';
import {COLORS, CATEGORY, CLIENTS} from '../../constants';
import DropDown from 'react-native-paper-dropdown';
import {TextInput, Button} from 'react-native-paper';
import {useDevice} from '../../hooks';

type Props = {
  showClientDropDown: boolean;
  setClientShowDropDown: (showClientDropDown: boolean) => void;
  client: string;
  setClient: (client: string) => void;
  showCategoryDropDown: boolean;
  setCategoryShowDropDown: (showCategoryDropDown: boolean) => void;
  category: string;
  setCategory: (category: string) => void;
  note: string;
  setNote: (note: string) => void;
  buttonName: string;
  onPress: () => void;
  disabled: boolean;
};

const NoteDetailScreen = (props: Props) => {
  const {
    client,
    setClient,
    showClientDropDown,
    setClientShowDropDown,
    showCategoryDropDown,
    setCategoryShowDropDown,
    category,
    setCategory,
    note,
    setNote,
    buttonName = 'Add Note',
    onPress,
    disabled,
  } = props;
  const {keyboardVerticalOffset} = useDevice();

  return (
    <TopLevelContainer>
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.label}>
            Add or edit the note details by filling in the details below
          </Text>
          <View style={styles.space8} />
          <DropDown
            label={'Select Client'}
            mode={'outlined'}
            visible={showClientDropDown}
            showDropDown={() => setClientShowDropDown(true)}
            onDismiss={() => setClientShowDropDown(false)}
            value={client}
            setValue={value => setClient(value)}
            list={CLIENTS}
            dropDownStyle={{backgroundColor: COLORS.white}}
          />
          <View style={styles.space8} />
          <DropDown
            label={'Select Category'}
            mode={'outlined'}
            visible={showCategoryDropDown}
            showDropDown={() => setCategoryShowDropDown(true)}
            onDismiss={() => setCategoryShowDropDown(false)}
            value={category}
            setValue={value => setCategory(value)}
            list={CATEGORY}
            dropDownStyle={{backgroundColor: COLORS.white}}
          />
          <TextInput
            label="Enter Note"
            value={note}
            onChangeText={text => setNote(text)}
            style={styles.textInput}
            multiline={true}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.bottom}>
          <Button mode="contained" onPress={onPress} disabled={disabled}>
            {buttonName}
          </Button>
        </KeyboardAvoidingView>
      </View>
    </TopLevelContainer>
  );
};

export default NoteDetailScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
  },
  top: {
    display: 'flex',
    flexGrow: 1,
  },
  bottom: {
    display: 'flex',
    width: '100%',
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    color: COLORS.secondaryTextColor,
  },
  textInput: {backgroundColor: COLORS.white, marginTop: 16},
  space8: {height: 8},
});
