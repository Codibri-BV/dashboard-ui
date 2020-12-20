import React from 'react';

import Box from '@material-ui/core/Box';

import {
  Container,
  IllustrationWrap,
  Message
} from './IllustrationMessage.style';

export interface IllustrationProps {
  message?: string;
  illustration?: React.ReactNode;
}

const EmptyMessage: React.FC<IllustrationProps> = ({
  illustration,
  message,
  children
}) => {
  return (
    <Container>
      <Box textAlign="center">
        <IllustrationWrap>{illustration}</IllustrationWrap>
        {message && <Message>{message}</Message>}
        {React.Children.count(children) > 0 && <Box mt={3}>{children}</Box>}
      </Box>
    </Container>
  );
};

export default EmptyMessage;
