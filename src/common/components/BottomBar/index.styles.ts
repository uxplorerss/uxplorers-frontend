// Emotion styles in object format

import { css } from '@emotion/react';

export const bottomBar = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  height: '60px',
  backgroundColor: '#fff',
  borderTop: '1px solid #ddd',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  bottom: '0',
  width: '100%',
});

export const left = css({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const center = css({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const right = css({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});
