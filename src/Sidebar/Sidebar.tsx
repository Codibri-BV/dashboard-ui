import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';

import { useAppContext } from '../App';
import { Drawer, DrawerNav, MenuToolbar } from './Sidebar.style';

interface Props {}

const Sidebar: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { isSidebarOpen, handleSidebarToggle } = useAppContext();

  return (
    <DrawerNav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={isSidebarOpen}
          onClose={handleSidebarToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <MenuToolbar />
          {children}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open={false}>
          <MenuToolbar />
          {children}
        </Drawer>
      </Hidden>
    </DrawerNav>
  );
};

export default Sidebar;
