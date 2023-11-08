import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {Note} from '../../../types';

type Props = {
  item: Note;
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
};

export const ListItem = (props: Props) => {
  const {item, onPressEdit, onPressDelete} = props;
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <Text style={styles.label}>Client: </Text>
        <Text style={styles.content}>{item.client}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Category: </Text>
        <Text style={styles.content}>{item.category}</Text>
      </View>
      <Text style={styles.noteText}>{item.note}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => onPressEdit(item.id)}
          style={[styles.button, {backgroundColor: COLORS.secondaryColor}]}>
          <Text style={[styles.buttonText, {color: COLORS.backGroundColor}]}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressDelete(item.id)}
          style={[styles.button, {backgroundColor: COLORS.delete}]}>
          <Text style={[styles.buttonText, {color: COLORS.backGroundColor}]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    minHeight: 100,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  noteText: {
    flexWrap: 'wrap',
    fontSize: 14,
    lineHeight: 15,
    fontWeight: '400',
    marginTop: 8,
    marginBottom: 16,
    color: COLORS.primaryTextColor,
  },
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 50,
    marginRight: 8,
    paddingTop: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    color: COLORS.secondaryTextColor,
  },
  content: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    color: COLORS.primaryTextColor,
  },
});
