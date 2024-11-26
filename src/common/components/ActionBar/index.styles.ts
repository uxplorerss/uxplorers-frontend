import { css, Theme } from '@emotion/react';

export const buildActionBar = (theme: Theme) =>
  css({
    backgroundColor: theme.colors.gray.white,
    padding: '20px 20px 34px 20px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: '20px 20px 0 0',
  });
