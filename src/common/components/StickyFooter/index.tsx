import React from 'react';
import { StickyFooterPropsType } from './index.types';
import { useTheme } from '@emotion/react';
import { buildStickyFooter } from './index.styles';

export default function StickyFooter({
  children,
  as: Component = 'footer',
  cx,
}: StickyFooterPropsType) {
  const theme = useTheme();
  return <Component css={[buildStickyFooter(theme), cx]}>{children}</Component>;
}
