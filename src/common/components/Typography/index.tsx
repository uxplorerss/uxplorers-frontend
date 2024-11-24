import React from 'react';
import { buildTypography } from './index.styles';
import { useTheme } from '@emotion/react';
import { TypographyPropsType } from './index.types';

function Typography({
  variant,
  children,
  as: Component = 'span',
}: TypographyPropsType) {
  const theme = useTheme();

  return (
    <Component css={buildTypography(theme, variant)}>{children}</Component>
  );
}

export default Typography;
