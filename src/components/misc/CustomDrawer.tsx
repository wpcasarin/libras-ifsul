import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { Box, Button, Divider, Icon, Image, VStack } from 'native-base';
import Animated, { interpolateNode } from 'react-native-reanimated';

import { Ionicons } from '_icons';
import { screenHeight } from '_util';

export const CustomDrawer = (props: any) => {
  const progress = useDrawerProgress();
  const translateX = interpolateNode(progress as any, {
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  return (
    <VStack flex={1}>
      <Box
        bgColor="primary.500"
        maxH={screenHeight / 4}
        alignContent="center"
        justifyContent="center">
        <Image
          w="100%"
          resizeMode="contain"
          source={require('_assets/drawer_logo.png')}
          alt="Logo IFSul"
        />
      </Box>
      <VStack flex={1} pt={5}>
        <DrawerContentScrollView {...props}>
          <Animated.View style={{ transform: [{ translateX }] }}>
            <DrawerItemList {...props} />
          </Animated.View>
        </DrawerContentScrollView>
      </VStack>
      <Divider />

      <VStack py={2} px={2} space={4}>
        <Button
          colorScheme="danger"
          variant="ghost"
          size="md"
          justifyContent="flex-start"
          flexDirection="row"
          startIcon={<Icon as={Ionicons} name="log-out-outline" size="md" />}
          _text={{
            justifyContent: 'flex-start',
          }}>
          Sair
        </Button>
      </VStack>
    </VStack>
  );
};
