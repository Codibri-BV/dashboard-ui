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
}

const Loader: React.FC<Props> = ({ children, loading, className }) => {
  return (
    <Container>
      {loading && (
        <Overlay className={className}>
          <CircularProgress />
        </Overlay>
      )}
      {children}
    </Container>
  );
};

export default Loader;
