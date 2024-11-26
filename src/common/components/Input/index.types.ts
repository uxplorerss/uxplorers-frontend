import type { Interpolation, Theme } from '@emotion/react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

export interface InputPropsType extends ComponentPropsWithoutRef<'input'> {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
  css?: Interpolation<Theme>;
  as?: ElementType;
}
