import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import type { DrawerParamList } from './types';
import type { DrawerNavigationOptions } from '@react-navigation/drawer';

import { CustomDrawer } from '_components/misc';
import { Ionicons } from '_icons';
import { HomeScreen, LoginScreen } from '_screens';
import { main } from '_themes';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const MainNavigator = () => {
  const options: DrawerNavigationOptions = {
    headerShown: false,
    drawerActiveTintColor: main.colors.primary[700],
    drawerActiveBackgroundColor: main.colors.primary[50],
    drawerInactiveTintColor: '#333333',
    drawerLabelStyle: {
      marginLeft: -22,
      fontSize: 15,
    },
  };

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={options}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
