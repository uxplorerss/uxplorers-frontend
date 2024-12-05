import type { Interpolation, Theme } from '@emotion/react';
import type { ReactNode } from '@tanstack/react-router';
import type { ElementType } from 'react';

export interface PrimaryCardPropsType {
  headerSlot?: ReactNode;
  bodySlot: ReactNode;
  footerSlot?: ReactNode;
  as?: ElementType;
  cx?: Interpolation<Theme>;
}
