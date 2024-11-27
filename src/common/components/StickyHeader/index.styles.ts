import { css, Theme } from '@emotion/react';

export const buildStickyHeader = (theme: Theme) =>
  css({
    backgroundColor: theme.colors.gray.white,
    top: 0,
    position: 'sticky',
    width: '100%',
    zIndex: theme.zIndex.dropdown,
  });
