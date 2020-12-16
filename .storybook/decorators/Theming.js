import React from "react";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const ThemeingDecorator = theme => storyFn => (
  <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {storyFn()}
      </ThemeProvider>
  </MuiThemeProvider>
);

export default ThemeingDecorator;
