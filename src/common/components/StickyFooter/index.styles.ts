import { css, type Theme } from '@emotion/react';

export const buildStickyFooter = (theme: Theme) =>
  css({
    position: 'sticky',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.colors.gray.white,
    zIndex: theme.zIndex.dropdown,
  });
