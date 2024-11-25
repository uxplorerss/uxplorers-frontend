import { css, Theme } from '@emotion/react';
import { buildTypography } from '../Typography/index.styles';

export const buildLanguageSwitchButton = (theme: Theme) =>
  css([
    buildTypography(theme, 'body3'),
    {
      color: theme.colors.gray.black,
    },
  ]);
