import { extendTheme } from 'native-base';

export const main = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#82e97d',
      100: '#67dd61',
      200: '#4ed047',
      300: '#3eb738',
      400: '#34972f',
      500: '#33812e',
      600: '#306b2d',
      700: '#2c572a',
      800: '#274425',
      900: '#20321f',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
