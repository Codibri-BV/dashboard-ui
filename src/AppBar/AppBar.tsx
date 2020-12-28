import React, { useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

import { useAppContext } from '../App';
import { AppBar as StyledAppBar, MenuButton } from './AppBar.style';

export interface Props {
  onMenuButtonClick?: () => void;
}

const AppBar: React.FC<Props> = ({ children, onMenuButtonClick }) => {
  const { handleSidebarToggle } = useAppContext();

  const handleClick = useCallback(() => {
    if (typeof onMenuButtonClick === 'function') {
      onMenuButtonClick();
    }

    handleSidebarToggle();
  }, [onMenuButtonClick, handleSidebarToggle]);

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MenuButton onClick={handleClick}>
          <MenuIcon />
        </MenuButton>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
