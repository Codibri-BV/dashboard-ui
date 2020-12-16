import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar as StyledAppBar, MenuButton } from './AppBar.style';

export interface Props {
  onMenuButtonClick: () => void;
}

const AppBar: React.FC<Props> = ({ onMenuButtonClick, children }) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MenuButton onClick={onMenuButtonClick}>
          <MenuIcon />
        </MenuButton>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
