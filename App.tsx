import React from 'react';

import { NativeBaseProvider, Text, Box } from 'native-base';

export const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>WELCOME</Text>
      </Box>
    </NativeBaseProvider>
  );
};
