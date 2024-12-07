import { css, Theme } from '@emotion/react';

export const buildContainerStyles = (theme: Theme, inactive: boolean) =>
  css({
    padding: '20px 11px',

    ...(inactive
      ? {
          color: theme.colors.gray[1],
          backgroundColor: theme.colors.gray[2],
        }
      : {
          color: theme.colors.gray.white,
          backgroundColor: theme.colors.primary.base,
        }),
  });
