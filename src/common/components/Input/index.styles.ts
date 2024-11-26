import { css, Theme } from '@emotion/react';
import { buildTypography } from '../Typography/index.styles';
import { buildFlex } from '../Flex/index.styles';

export const buildInput = (theme: Theme) =>
  css([
    buildTypography(theme, 'body1'),
    buildFlex({
      align: 'center',
      justify: 'flex-start',
      direction: 'row',
      gap: '0',
      wrap: 'nowrap',
      width: '100%',
    }),
    {
      backgroundColor: theme.colors.gray[3],
      borderWidth: 0,
      padding: `15.5px 24px`,
      borderRadius: theme.radii.normal,
      color: theme.colors.gray.black,
      outline: 'none',
      '::placeholder': {
        color: theme.colors.gray[1],
      },
      boxSizing: 'border-box',
    },
  ]);
