import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme, darkTheme } from './';
import { useSelector } from 'react-redux';

export const AppTheme = ({ children }) => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode); 
  const selectedTheme = isDarkMode ? darkTheme : purpleTheme; 

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
