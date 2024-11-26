import type { Interpolation, Theme } from '@emotion/react';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface ButtonPropsType
  extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  css?: Interpolation<Theme>;
  as?: ElementType;
}

export interface ButtonPropsType extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}
