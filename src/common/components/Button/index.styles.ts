import { css } from '@emotion/react';
import { buildFlex } from '../Flex/index.styles';

export const container = css(
  buildFlex({
    justify: 'center',
    align: 'center',
    direction: 'column',
    gap: '0',
    width: 'auto',
  }),
  {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  }
);
