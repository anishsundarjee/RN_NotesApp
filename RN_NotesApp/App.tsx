import React from 'react';
import {MainNavigator} from './src/navigation';
import {DefaultTheme, Provider} from 'react-native-paper';
import {useApp, AppContext} from './src/hooks';

const App = () => {
  return (
    <Provider theme={DefaultTheme}>
      <AppContext.Provider value={useApp()}>
        <MainNavigator />
      </AppContext.Provider>
    </Provider>
  );
};

export default App;
