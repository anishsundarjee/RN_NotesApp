import React from 'react';
import {StatusBar, StyleSheet, Dimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants';

const {height} = Dimensions.get('window');

type Props = {
  children?: React.ReactNode;
  style?: any;
  containerStyle?: any;
  horizontalFullScreen?: boolean;
  disablePaddingBottom?: boolean;
  isVerticalFullScreen?: boolean;
};
export const TopLevelContainer = (props: Props) => {
  const insets = useSafeAreaInsets();
  const {
    children,
    style = {},
    containerStyle = {},
    horizontalFullScreen = false,
    disablePaddingBottom = false,
    isVerticalFullScreen = false,
  } = props;

  return (
    <View
      id="container"
      style={[
        styles.container,
        !disablePaddingBottom && {
          paddingBottom: insets.bottom,
        },
        containerStyle,
      ]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.backGroundColor}
      />
      <View
        style={[
          styles.main,
          horizontalFullScreen
            ? styles.paddingHorizontalFullScreen
            : styles.paddingHorizontalNoneFullScreen,
          disablePaddingBottom ? styles.disablePaddingBottomScreen : undefined,
          isVerticalFullScreen ? styles.fullHeight : undefined,
          style,
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  main: {
    paddingVertical: 16,
  },
  paddingHorizontalFullScreen: {
    paddingHorizontal: 0,
  },
  paddingHorizontalNoneFullScreen: {
    paddingHorizontal: 24,
  },
  disablePaddingBottomScreen: {
    paddingBottom: 0,
  },
  fullHeight: {
    height: height,
  },
});
