import type { SerializedStyles } from '@emotion/react';

export interface ButtonPropsType
  extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  css?: SerializedStyles;
}
