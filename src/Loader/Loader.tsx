import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Container, Overlay } from './Loader.style';

export interface Props {
  /**
   * Set loading state
   */
  loading: boolean;
  /**
   * classname for styled-components
   */
  className?: string;

  fullscreen?: boolean;
}

const Loader: React.FC<Props> = ({
  children,
  loading,
  className,
  fullscreen
}) => {
  if (!loading) {
    return <React.Fragment>children</React.Fragment>;
  }

  return (
    <Container fullscreen={fullscreen}>
      <Overlay className={className} data-testid="overlay">
        <CircularProgress />
      </Overlay>
      {children}
    </Container>
  );
};

export default Loader;
