import styled from 'styled-components';

export const Container = styled.main`
  flex-grow: 1;
  height: calc(100vh - ${({ theme }) => theme.dimentions.header.height}px);
`;

export const MenuToolbar = styled.div`
  ${({ theme }) => theme.mixins.toolbar};
`;
