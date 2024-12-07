import { css, Theme } from '@emotion/react';

export const paddingContainer = css({
  padding: '17px 20px',
});

export const buildContainerStyles = (theme: Theme) =>
  css({
    padding: 0,
    borderRadius: theme.radii.normal,
    border: `1px solid ${theme.colors.gray[2]}`,
    overflow: 'hidden',
    width: '100%',
    margin: 0,
  });

export const horizontalPaddingStyles = css({
  padding: '0 17px',
});
