import React from 'react';

import { Box, Text, Button } from 'native-base';

import type { HomeScreenProps } from '_navigators';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>HOME</Text>
      <Button onPress={() => navigation.navigate('Login')}>Click Me</Button>
    </Box>
  );
};
