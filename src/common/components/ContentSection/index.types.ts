import { Interpolation, Theme } from '@emotion/react';
import { ElementType, ReactNode } from 'react';

export interface ContentSectionPropsType {
  children: ReactNode;
  cx?: Interpolation<Theme>;
  as?: ElementType;
}
