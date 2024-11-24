import { css, Theme } from '@emotion/react';
import { useTypography } from '../Typography/index.styles';
import { useFlex } from '../Flex/index.styles';

export const useInput = (theme: Theme) => [
  useTypography(theme, 'body'),
  useFlex({
    align: 'center',
    justify: 'flex-start',
    direction: 'row',
    gap: '0',
    wrap: 'nowrap',
    width: '100%',
  }),
  css({
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
  }),
];
