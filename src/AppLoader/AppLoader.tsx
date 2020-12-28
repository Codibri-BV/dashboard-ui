import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Container, SubText, Text } from './AppLoader.style';

interface Props {
  text?: string;
  subText?: string;
}

const AppLoader: React.FC<Props> = ({ text, subText }) => {
  return (
    <Container>
      <CircularProgress />
      {text && <Text>{text}</Text>}
      {subText && <SubText>{subText}</SubText>}
    </Container>
  );
};

export default AppLoader;
