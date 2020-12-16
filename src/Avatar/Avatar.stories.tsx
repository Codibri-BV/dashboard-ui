import React from 'react';

import Avatar from './';

export default {
  title: 'User/Avatar',
  component: Avatar,
};

export const noUser = () => <Avatar />;

export const noPicture = () => <Avatar username="Toon Janssens" />;

export const withImage = () => (
  <Avatar
    username="Toon Janssens"
    image="https://picsum.photos/id/1027/50/50"
  />
);
