import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

// custom config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const brandRing = {
  _focus: {
    ring: 1,
    ringColor: 'brand.500',
  },
};

const inputSelectStyles = {
  variants: {
    outline: {
      field: {
        borderRadius: 'md',
        _focus: {
          borderColor: 'brand.500',
          ...brandRing,
        },
      },
    },
  },
};

// extend for custom theme
const theme = extendTheme(
  config,
  {
    colors: {
      brand: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
    },
    fonts: {
      heading: `Montserrat, Georgia, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
      mono: 'Menlo, monospace',
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            rounded: 'none',
            ...brandRing,
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.500', 'brand.200')(props),

            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props),
            },

            _active: {
              backgroundColor: mode('brand.700', 'brand.400')(props),
            },
          }),
        },
      },
      Input: {
        ...inputSelectStyles,
      },
      Select: {
        ...inputSelectStyles,
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Button', 'Checkbox'],
  }),
  withDefaultVariant({
    variant: 'outline',
    components: ['Input', 'Select'],
  })
);
export default theme;
