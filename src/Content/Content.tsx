import React from 'react';

import { Container, MenuToolbar } from './Content.style';

interface Props {}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <Container data-testid="main-content">
      <MenuToolbar />
      {children}
    </Container>
  );
};

export default Content;
