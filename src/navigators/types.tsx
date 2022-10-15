import type { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerParamList = {
  Home: undefined;
  Login: undefined;
};

export type HomeScreenProps = DrawerScreenProps<DrawerParamList, 'Home'>;
export type LoginScreenProps = DrawerScreenProps<DrawerParamList, 'Login'>;
