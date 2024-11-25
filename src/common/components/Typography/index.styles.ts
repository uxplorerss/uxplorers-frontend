import { css } from '@emotion/react';
import type { ThemeType } from '../../../theme';
import { TypographyVariant } from './index.types';

export const buildTypography = (
  theme: ThemeType,
  variant: TypographyVariant
) => {
  const styles = {
    title1: css({
      fontSize: theme.fontSize.title1,
      lineHeight: theme.lineHeight.title1,
      fontWeight: theme.fontWeight.title1,
    }),
    title2: css({
      fontSize: theme.fontSize.title2,
      lineHeight: theme.lineHeight.title2,
      fontWeight: theme.fontWeight.title2,
    }),
    title3: css({
      fontSize: theme.fontSize.title3,
      lineHeight: theme.lineHeight.title3,
      fontWeight: theme.fontWeight.title3,
    }),
    title4: css({
      fontSize: theme.fontSize.title4,
      lineHeight: theme.lineHeight.title4,
      fontWeight: theme.fontWeight.title4,
    }),
    body1: css({
      fontSize: theme.fontSize.body1,
      lineHeight: theme.lineHeight.body1,
      fontWeight: theme.fontWeight.body1,
    }),
    body2: css({
      fontSize: theme.fontSize.body2,
      lineHeight: theme.lineHeight.body2,
      fontWeight: theme.fontWeight.body2,
    }),
    body3: css({
      fontSize: theme.fontSize.body3,
      lineHeight: theme.lineHeight.body3,
      fontWeight: theme.fontWeight.body3,
    }),
    button1: css({
      fontSize: theme.fontSize.button1,
      lineHeight: theme.lineHeight.button1,
      fontWeight: theme.fontWeight.button1,
    }),
    caption1: css({
      fontSize: theme.fontSize.caption1,
      lineHeight: theme.lineHeight.caption1,
      fontWeight: theme.fontWeight.caption1,
    }),
  };

  return styles[variant];
};
