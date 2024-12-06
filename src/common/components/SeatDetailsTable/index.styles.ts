import { css, Theme } from '@emotion/react';

export const verticalPaddingStyles = css({
  padding: '17px 0',
});

export const buildDashedVerticalBorderStyles = (theme: Theme) =>
  css({
    borderTop: `1px dashed ${theme.colors.gray[1]}`,
    borderBottom: `1px dashed ${theme.colors.gray[1]}`,
  });

export const buildGray1ChildrenStyles = (theme: Theme, inactive: boolean) =>
  css({
    '& *': {
      color: inactive ? theme.colors.gray[1] : '',
    },
  });

export const buildGray4Styles = (theme: Theme, inactive: boolean) =>
  css({
    '&&': {
      color: inactive ? theme.colors.gray[4] : '',
    },
  });
