import React from 'react';
import { buildTypography } from './index.styles';
import { useTheme } from '@emotion/react';
import type { TypographyPropsType } from './index.types';

export default function Typography({
  variant,
  children,
  as: Component = 'span',
  css,
}: TypographyPropsType) {
  const theme = useTheme();

  return (
    <Component css={[buildTypography(theme, variant), css]}>
      {children}
    </Component>
  );
}
