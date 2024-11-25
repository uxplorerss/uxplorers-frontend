import { css } from '@emotion/react';
import { buildFlex } from '../Flex/index.styles';

export const container = css([
  buildFlex({
    justify: 'space-between',
    align: 'center',
    wrap: 'nowrap',
    gap: '0',
  }),
  {
    padding: '1rem',
    boxSizing: 'border-box',
  },
]);
