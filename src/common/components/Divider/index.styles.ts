import { css, Theme } from '@emotion/react';
import { Orientation } from './index.types';

// FIXME: styling with height instead of flex-grow property
export const buildDividerStyles = (theme: Theme, orientation: Orientation) =>
  css({
    backgroundColor: theme.colors.gray[1],
    color: theme.colors.gray[1],
    flexGrow: 0,
    ...(orientation === 'horizontal'
      ? {
          height: '1px',
          width: '100%',
        }
      : {
          alignSelf: 'stretch',
          width: '1px',
        }),
  });
