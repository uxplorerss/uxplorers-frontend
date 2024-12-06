import { css, Theme } from '@emotion/react';

export const buildContainerStyles = (theme: Theme, isActivated: boolean) =>
  css({
    padding: '20px 11px',

    ...(isActivated
      ? {
          color: theme.colors.gray.white,
          backgroundColor: theme.colors.primary.base,
        }
      : {
          color: theme.colors.gray[1],
          backgroundColor: theme.colors.gray[2],
        }),
  });
