import React from 'react';
import { StikcyHeaderPropsType } from './index.types';
import { buildStickyHeader } from './index.styles';
import { useTheme } from '@emotion/react';

export default function StikcyHeader({ children }: StikcyHeaderPropsType) {
  const theme = useTheme();
  return <header css={buildStickyHeader(theme)}>{children}</header>;
}
