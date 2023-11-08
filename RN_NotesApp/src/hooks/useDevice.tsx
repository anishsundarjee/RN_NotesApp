import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useDevice = () => {
  const insets = useSafeAreaInsets();
  return {keyboardVerticalOffset: insets.top + 76};
};
