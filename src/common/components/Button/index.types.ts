import { ReactNode } from '@tanstack/react-router';
import { ComponentPropsWithoutRef } from 'react';

export interface ButtonPropsType extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}
