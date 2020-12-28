import styled from 'styled-components';

import MuiDrawer from '@material-ui/core/Drawer';

export const DrawerNav = styled.nav`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: ${({ theme }) => theme.dimentions.sidebar.width}px;
    flex-shrink: 0;
  }
`;

export const Drawer = styled(MuiDrawer)`
  width: ${({ theme }) => theme.dimentions.sidebar.width}px;

  .MuiDrawer-paper {
    width: ${({ theme }) => theme.dimentions.sidebar.width}px;
    background-color: ${({ theme }) => theme.palette.sidebar.main};
    color: ${({ theme }) => theme.palette.sidebar.text};
  }
`;

export const MenuToolbar = styled.div`
  ${({ theme }) => theme.mixins.toolbar};
`;
