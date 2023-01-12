import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeProvider,
  Global,
  DEFAULT_THEME as mantineDefaultTheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import windiColors from 'windicss/colors';
import windiDefaultTheme from 'windicss/defaultTheme';

const convertBreakpoint = (breakpoint) => {
  const convertedBreakpoint = {};
  Object.keys(breakpoint).forEach((size) => {
    // NOTE: Have to remove 'px' from breakpoint and convert to number
    convertedBreakpoint[size] = breakpoint[size].replace('px', '') * 1;
  });
  return convertedBreakpoint;
};

const convertColor = (colors) => {
  const convertedColor = {};
  Object.keys(colors).forEach((color) => {
    if (color === 'lightBlue') {
      color = 'sky';
    } else if (color === 'warmGray') {
      color = 'stone';
    } else if (color === 'trueGray') {
      color = 'neutral';
    } else if (color === 'coolGray') {
      color = 'gray';
    } else if (color === 'blueGray') {
      color = 'slate';
    } else if (color === 'zink') {
      color = 'zinc';
    }

    if (colors[color] instanceof Object) {
      convertedColor[color] = Object.values(colors[color]);
    }
  });
  return convertedColor;
};

const convertFontSize = (fontSize) => {
  const convertedFontSize = {};
  Object.keys(fontSize).forEach((size) => {
    // NOTE: Don't have to convert 'rem' to 'px'
    convertedFontSize[size] = fontSize[size][0];
  });
  return convertedFontSize;
};

const theme = {
  breakpoints: {
    ...mantineDefaultTheme.breakpoints,
    ...convertBreakpoint(windiDefaultTheme.screens), // WindiCSS
  },
  colors: convertColor(windiColors),
  defaultRadius: 'md',
  black: windiColors.black,
  white: windiColors.white,
  primaryColor: 'blue',
  fontSizes: {
    ...mantineDefaultTheme.fontSizes,
    ...convertFontSize(windiDefaultTheme.fontSize),
  },
  radius: {
    ...mantineDefaultTheme.radius,
    // NOTE: WindiCSS border radius messed up with Mantine
    // ...windiDefaultTheme.borderRadius,
  },
  fontFamily: `Inter,${mantineDefaultTheme.fontFamily}`,
  fontFamilyMonospace: `"Space Mono",${mantineDefaultTheme.fontFamilyMonospace}`,
  headings: {
    fontFamily: `Quicksand,${mantineDefaultTheme.headings.fontFamily}`,
  },
  lineHeight: mantineDefaultTheme.lineHeight,
  loader: 'oval',
  shadows: {
    ...mantineDefaultTheme.shadows,
    ...windiDefaultTheme.boxShadow,
  },
};

const MyGlobalStyles = () => {
  return (
    <Global
      styles={{
        'body.dark': {
          img: {
            filter: 'brightness(.8) contrast(1.2)',
          },
        },
        '::-webkit-scrollbar': {
          width: '7px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}
    />
  );
};

const MantineProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (colorScheme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [colorScheme]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <BaseMantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MyGlobalStyles />
        {children}
      </BaseMantineProvider>
    </ColorSchemeProvider>
  );
};

export { MantineProvider };
