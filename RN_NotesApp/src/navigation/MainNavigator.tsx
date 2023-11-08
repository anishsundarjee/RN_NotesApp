import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ViewNotesPresenter, NoteDetailPresenter} from '../screens';

export type RootStackParamList = {
  ViewNotes: undefined;
  NoteDetail: {id: string | undefined};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ViewNotes"
          component={ViewNotesPresenter}
          options={{title: 'View Notes'}}
        />
        <Stack.Screen
          name="NoteDetail"
          component={NoteDetailPresenter}
          options={{title: 'Write Note'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
