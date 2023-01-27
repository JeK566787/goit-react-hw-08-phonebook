import { extendTheme } from '@chakra-ui/react';

// example theme
const theme = extendTheme({
  textStyles: {
    a: {
      fontFamily: 'Fira Sans',
      fontStyle: 'italic',
      fontSize: ['11px', '21px'],
      fontWeight: '300',
      lineHeight: '100%',
    },
    p: {
      fontFamily: 'Fira Sans',
      fontStyle: 'italic',
      fontSize: ['16px', '28px'],
      fontWeight: '300',
      lineHeight: '100%',
      color: 'teal.500',
    },
    h2: {
      fontFamily: 'Fira Sans',
      fontStyle: 'italic',
      fontSize: ['36px', '48px'],
      fontWeight: '400',
      lineHeight: '100%',
      letterSpacing: '-1%',
      color: 'teal.500',
    },
  },
  layerStyle: {
    input: {
      borderColor: 'lime',
      variant: 'flushed',
      focusBorderColor: 'lime',
    },
  },
});

export default theme;
