import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import Button from '@material-ui/core/Button';

import IllustrationMessage, { IllustrationProps } from './';

export default {
  title: 'IllustrationMessage'
} as Meta;

export const OnlyMessage: React.VFC<IllustrationProps> = () => (
  <IllustrationMessage message="test" />
);

export const WithChildren: React.VFC<IllustrationProps> = () => (
  <IllustrationMessage message="Click the button bellow to start the action">
    <Button variant="contained" color="primary">
      Action
    </Button>
  </IllustrationMessage>
);
