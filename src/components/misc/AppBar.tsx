import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Box, HStack, IconButton, Icon, StatusBar, Text } from 'native-base';

import { MaterialIcons } from '_icons';
import { HookNavigationProps } from '_navigators';
import { main } from '_themes';

export const AppBar = () => {
  //hooks
  const navigation = useNavigation<HookNavigationProps>();
  const route = useRoute();

  return (
    <>
      <StatusBar
        backgroundColor={main.colors.primary[500]}
        barStyle="light-content"
      />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="primary.500"
        px="1"
        py="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center" justifyContent="space-between" w="100%">
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="menu" size="xl" color="white" />
            }
            onPress={() => navigation.toggleDrawer()}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            {route.name}
          </Text>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="xl" color="white" />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};
