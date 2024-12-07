import { css, Theme } from '@emotion/react';

export const selectTypeStyles = (theme: Theme, inactive: boolean) =>
  css({
    backgroundColor: 'primary',
    cursor: 'pointer',
    ...(inactive
      ? {
          color: theme.colors.gray[0],
        }
      : {
          color: theme.colors.primary.base,
        }),
  });
