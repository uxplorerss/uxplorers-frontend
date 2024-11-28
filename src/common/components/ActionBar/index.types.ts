import type { Interpolation, Theme } from '@emotion/react';
import type { ReactNode } from 'react';

export interface ActionBarPropsType {
  bodySlot?: ReactNode;
  actionSlot: ReactNode;
  cx?: Interpolation<Theme>;
}
