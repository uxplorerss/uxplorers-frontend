import type { Interpolation, Theme } from '@emotion/react';
import type { ElementType, ReactNode } from 'react';

export interface StikcyHeaderPropsType {
  as?: ElementType;
  children: ReactNode;
  cx: Interpolation<Theme>;
}
