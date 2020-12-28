import styled from 'styled-components';

export const Item = styled.a`
  color: ${({ theme }) => theme.palette.sidebar.text};
  text-decoration: none;

  svg {
    fill: ${({ theme }) => theme.palette.sidebar.text};
  }

  &.active .MuiListItem-root {
    background-color: rgba(0, 0, 0, 0.35);
  }

  &:hover .MuiListItem-root {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
