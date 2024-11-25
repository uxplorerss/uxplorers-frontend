import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ButtonPropsType extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}
