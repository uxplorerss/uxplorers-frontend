import React from 'react';
import { StikcyHeaderPropsType } from './index.types';
import { buildStickyHeader } from './index.styles';
import { useTheme } from '@emotion/react';

export default function StikcyHeader({
  children,
  as: Component = 'header',
}: StikcyHeaderPropsType) {
  const theme = useTheme();
  return <Component css={buildStickyHeader(theme)}>{children}</Component>;
}
