import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No notes added</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {
    fontSize: 21,
    fontWeight: '600',
    lineHeight: 24,
    color: COLORS.secondaryTextColor,
  },
});
