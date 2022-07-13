import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Open Sans, sans-serif',
    mono: 'Open Sans, sans-serif',
  },
  colors: {
    primaryColor: '#7859E1',
    darkColor: '#130F40',
    lightColor: '#FFFFFF',
  },
});

export default theme;
