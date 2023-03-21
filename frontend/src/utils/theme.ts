import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily:
          "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN','Hiragino Sans', Meiryo, sans-serif",
      },
    },
  },
});

export default theme;
