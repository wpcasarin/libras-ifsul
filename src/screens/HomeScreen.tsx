import React from 'react';

import { Box, Text } from 'native-base';

import type { HomeScreenProps } from '_navigators';

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>HOME</Text>
    </Box>
  );
};
