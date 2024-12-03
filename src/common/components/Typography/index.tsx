import React from 'react';
import {
  buildTextPosition,
  buildTypoBackground,
  buildTypography,
} from './index.styles';
import { useTheme } from '@emotion/react';
import type { TypographyPropsType } from './index.types';

export default function Typography({
  variant,
  children,
  as: Component = 'span',
  textAlign,
  cx,
  backgroundColor = 'none',
}: TypographyPropsType) {
  const theme = useTheme();

  return (
    <Component
      css={[
        buildTypography(theme, variant),
        buildTextPosition(textAlign),
        buildTypoBackground(theme, backgroundColor),
        cx,
      ]}
    >
      {children}
    </Component>
  );
}
