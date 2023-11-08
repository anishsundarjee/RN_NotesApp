import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

type Props = {
  onPress: () => void;
};

export const Header = (props: Props) => {
  const {onPress} = props;

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.label}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.add,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    width: 100,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: 15,
    fontWeight: '600',
    color: COLORS.white,
  },
});
