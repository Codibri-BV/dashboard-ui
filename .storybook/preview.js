export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addDecorator, configure } from '@storybook/react';
import Theming from './decorators/Theming';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  dimentions: {
    sidebar: {
      width: 250,
    },
    header: {
      height: 64,
    },
  },
});

addDecorator(Theming(theme));

configure(require.context('../src', true, /\.stories\.tsx$/), module);
