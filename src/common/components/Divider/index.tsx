import React from 'react';
import { DividerPropsType } from './index.types';
import { buildDividerStyles } from './index.styles';
import { useTheme } from '@emotion/react';

export function Divider({
  orientation = 'horizontal',
  decorative = true,
  ...props
}: DividerPropsType) {
  const theme = useTheme();
  return (
    <div
      css={buildDividerStyles(theme, orientation)}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      {...props}
    />
  );
}
