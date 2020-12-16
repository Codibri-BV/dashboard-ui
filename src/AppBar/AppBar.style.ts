import styled from 'styled-components';

import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

export const AppBar = styled(MuiAppBar).attrs(() => ({ elevation: 0 }))`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: calc(100% - ${({ theme }) => theme.dimentions.sidebar.width}px);
    margin-left: ${({ theme }) => theme.dimentions.sidebar.width}px;
  }
`;

export const MenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: none;
  }
`;
