import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { MainNavigator } from '_navigators';
import { main } from '_themes';

export const App = () => {
  return (
    <NativeBaseProvider theme={main}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
