import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const IllustrationWrap = styled.div`
  & > * {
    margin: 0 auto;
  }
`;

export const Message = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
