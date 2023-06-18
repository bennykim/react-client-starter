import { PaletteMode } from '@mui/material';

const lightTheme = {
  primary: {
    light: 'rgb(135, 188, 231)',
    main: 'rgb(33, 150, 243)',
    dark: 'rgb(15, 101, 189)',
    contrastText: '#fff',
  },
  secondary: {
    light: 'rgb(255, 171, 145)',
    main: 'rgb(244, 67, 54)',
    dark: 'rgb(183, 28, 28)',
    contrastText: '#000',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    default: '#fff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#000',
    secondary: 'rgba(0, 0, 0, 0.54)',
  },
};

const darkTheme = {
  primary: {
    light: 'rgb(63, 140, 181)',
    main: 'rgb(0, 105, 160)',
    dark: 'rgb(0, 77, 115)',
    contrastText: '#fff',
  },
  secondary: {
    light: 'rgb(255, 165, 130)',
    main: 'rgb(244, 67, 54)',
    dark: 'rgb(186, 12, 47)',
    contrastText: '#000',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    default: '#212121',
    paper: '#424242',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
  },
};

export function getDesignTokens(mode: PaletteMode) {
  switch (mode) {
    case 'light':
      return {
        palette: lightTheme,
      };
    case 'dark':
      return {
        palette: darkTheme,
      };
  }
}
