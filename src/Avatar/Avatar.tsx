import React from 'react';

import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@material-ui/core/Avatar';

export interface AvatarProps extends MuiAvatarProps {
  /**
   * The full name of the username
   */
  username?: string;

  /**
   * URL of the avatar image
   */
  image?: string | null;
}

/**
 * User avatar
 */
export const Avatar: React.FC<AvatarProps> = ({ username, image, alt, ...avatarProps }) => {
  if (image) {
    avatarProps.src = image;
  }

  return (
    <MuiAvatar {...avatarProps} alt={username}>
      {username && username.charAt(0).toUpperCase()}
    </MuiAvatar>
  );
};

export default Avatar;
