import { css } from '@emotion/react';
import { buildFlex } from '../Flex/index.styles';

export const bottomBar = css([
  buildFlex({
    justify: 'space-between',
    align: 'center',
    direction: 'row',
    wrap: 'nowrap',
    gap: '0',
    width: '100%',
  }),
  {
    padding: '10px 0 33px 0',
    borderTop: '1px solid #C7C7C7',
    boxSizing: 'border-box',
  },
]);

export const buttonContainer = css({
  flex: 'auto',
  flexDirection: 'column',
});
