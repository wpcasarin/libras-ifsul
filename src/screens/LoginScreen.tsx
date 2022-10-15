import React from 'react';

import { Box, Text } from 'native-base';

import type { LoginScreenProps } from '_navigators';

export const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>LOGIN</Text>
    </Box>
  );
};
