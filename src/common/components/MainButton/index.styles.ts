import { css, Theme } from '@emotion/react';

export const buildMainButton = (theme: Theme, disabled: boolean) =>
  css([
    {
      width: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing.normal,
      borderRadius: '20px',
      color: theme.colors.gray.white,
      backgroundColor: disabled
        ? theme.colors.gray[1]
        : theme.colors.gray.black,
    },
  ]);
