import React from 'react';
import { addDecorator } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { useDarkMode } from 'storybook-dark-mode';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

addDecorator((story) => {
  const prefersDarkMode = useDarkMode();
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{story()}</CssBaseline>
    </ThemeProvider>
  )
});
