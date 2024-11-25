import type { SerializedStyles } from '@emotion/react';
import type { ElementType } from 'react';

export interface ButtonPropsType
  extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  css?: SerializedStyles;
  as?: ElementType;
}
