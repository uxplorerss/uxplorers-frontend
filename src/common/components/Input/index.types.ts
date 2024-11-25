import { SerializedStyles } from '@emotion/react';

export interface InputPropsType
  extends React.ComponentPropsWithoutRef<'input'> {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
  css?: SerializedStyles;
}
