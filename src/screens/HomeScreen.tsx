import React from 'react';

import { Box, Text, Button } from 'native-base';

import type { HomeScreenProps } from '_navigators';

import { AppBar } from '_components/misc';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <>
      <AppBar />
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>HOME</Text>
        <Button onPress={() => navigation.navigate('Login')}>Click Me</Button>
      </Box>
    </>
  );
};
