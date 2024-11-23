import { css } from '@emotion/react';
import { ThemeType } from '../../../theme';
import { TypographyVariant } from './index.types';

export const useTypography = (theme: ThemeType, variant: TypographyVariant) => {
  const styles = {
    typography1: css({
      fontSize: theme.fontSize[1],
      lineHeight: theme.lineHeight[1],
      fontWeight: theme.fontWeight[1],
    }),
    typography2: css({
      fontSize: theme.fontSize[2],
      lineHeight: theme.lineHeight[2],
      fontWeight: theme.fontWeight[2],
    }),
    typography3: css({
      fontSize: theme.fontSize[3],
      lineHeight: theme.lineHeight[3],
      fontWeight: theme.fontWeight[3],
    }),
    typography4: css({
      fontSize: theme.fontSize[4],
      lineHeight: theme.lineHeight[4],
      fontWeight: theme.fontWeight[4],
    }),
    typography5: css({
      fontSize: theme.fontSize[5],
      lineHeight: theme.lineHeight[5],
      fontWeight: theme.fontWeight[5],
    }),
    typography6: css({
      fontSize: theme.fontSize[6],
      lineHeight: theme.lineHeight[6],
      fontWeight: theme.fontWeight[6],
    }),
    title: css({
      fontSize: theme.fontSize.title,
      lineHeight: theme.lineHeight.title,
      fontWeight: theme.fontWeight.title,
    }),
    body: css({
      fontSize: theme.fontSize.body,
      lineHeight: theme.lineHeight.body,
      fontWeight: theme.fontWeight.body,
    }),
  };

  return styles[variant];
};
