import { ReactNode, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Text from '@/component/Text';
import Buttons from '@/component/Buttons';
import ThemeModeToggle from '@/component/ThemeModeToggle';
import styles from '@/app.module.scss';
import { getDesignTokens } from '@/utils/theme';
import { PALETTE_MODE_LIGHT } from '@/config/constants';

function App() {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(PALETTE_MODE_LIGHT);
  const theme = getDesignTokens(paletteMode);
  const darkTheme = createTheme(theme);

  const renderSection = (title: string, children: ReactNode) => (
    <Box sx={{ p: 2 }}>
      <Text variant="h6" style={styles.title}>
        {title}
      </Text>
      {children}
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {renderSection('Dark Mode', <ThemeModeToggle onChange={setPaletteMode} />)}
      {renderSection('Buttons', <Buttons />)}
    </ThemeProvider>
  );
}

export default App;
