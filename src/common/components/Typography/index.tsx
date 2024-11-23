import React from 'react';
import { useTypography } from './index.styles';
import { useTheme } from '@emotion/react';
import { TypographyPropsType } from './index.types';

function Typography({
  variant,
  children,
  as: Component = 'div',
}: TypographyPropsType) {
  const theme = useTheme();

  return <Component css={useTypography(theme, variant)}>{children}</Component>;
}

export default Typography;
