import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
