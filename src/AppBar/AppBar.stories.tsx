import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import AppBar from './';

export default { title: 'Layout/AppBar', decorators: [withA11y] };

export const MobileDefault = () => (
  <AppBar onMenuButtonClick={action('Toggle menu clicked')} />
);

MobileDefault.story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
};

export const DesktopDefault = () => (
  <AppBar onMenuButtonClick={action('Toggle menu clicked')} />
);
