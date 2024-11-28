import { css } from '@emotion/react';

export const seatContainer = css({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
});

export const seatContent = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
