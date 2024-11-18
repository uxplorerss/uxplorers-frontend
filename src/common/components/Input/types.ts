import { ComponentPropsWithoutRef } from 'react';

export interface InputPropsType extends ComponentPropsWithoutRef<'input'> {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
}
