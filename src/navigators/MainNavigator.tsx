import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import type { DrawerParamList } from './types';
import type { DrawerNavigationOptions } from '@react-navigation/drawer';

import { HomeScreen, LoginScreen } from '_screens';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const MainNavigator = () => {
  const options: DrawerNavigationOptions = {
    headerShown: false,
  };

  return (
    <Drawer.Navigator screenOptions={options} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};
