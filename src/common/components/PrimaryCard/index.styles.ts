import { css, Theme } from '@emotion/react';

export const buildBodyContainerStyles = (
  theme: Theme,
  hasHeader: boolean,
  hasFooter: boolean
) => css({});

export const paddingContainer = css({
  padding: '17px 20px',
});

export const buildContainerStyles = (theme: Theme) =>
  css({
    padding: 0,
    borderRadius: theme.radii.normal,
    overflow: 'hidden',
    width: '100%',
  });
