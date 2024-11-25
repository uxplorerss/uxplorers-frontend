import type { SerializedStyles } from '@emotion/react';
import type { ElementType } from 'react';

export interface InputPropsType
  extends React.ComponentPropsWithoutRef<'input'> {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
  css?: SerializedStyles;
  as?: ElementType;
}
