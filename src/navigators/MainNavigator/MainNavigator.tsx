import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen, LoginScreen } from '_screens';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};
