import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -200px;
  text-align: center;
`;

export const Text = styled.div`
  margin-top: 1em;
`;

export const SubText = styled.div`
  margin-top: 0.5em;
  font-size: 0.8em;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
