import React, { ChangeEvent } from 'react';
import { InputPropsType } from './types';
import { useInput } from './index.styles';
import { useTheme } from '@emotion/react';

export default function Input({
  value,
  onValueChange,
  type = 'text',
  error,
  ...rest
}: InputPropsType) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };
  const theme = useTheme();

  return (
    <input
      css={useInput(theme)}
      type={type}
      value={value}
      onChange={handleChange}
      className={`input-field ${error ? 'input-error' : ''}`}
      {...rest}
    />
  );
}
