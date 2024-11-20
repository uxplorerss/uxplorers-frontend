import { css, Theme } from '@emotion/react';

export const useInput = (theme: Theme) =>
  css({
    backgroundColor: theme.colors.gray.lightest,
    borderWidth: 0,
    padding: `${theme.spacing.normal} ${theme.spacing.normal}`,
    fontSize: theme.fontSize.normal,
    lineHeight: theme.lineHeight.normal,
    fontWeight: theme.fontWeight.normal,
    borderRadius: theme.radii.normal,
    color: theme.colors.gray.blackened,
    outline: 'none',
    '::placeholder': {
      color: theme.colors.gray.base,
    },
  });
