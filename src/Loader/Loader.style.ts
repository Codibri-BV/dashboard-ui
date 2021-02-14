import styled, { css } from 'styled-components';

export const Container = styled.div<{ fullscreen?: boolean }>`
  position: relative;
  ${({ fullscreen }) =>
    fullscreen &&
    css`
      height: 100vh;
    `}
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
`;
