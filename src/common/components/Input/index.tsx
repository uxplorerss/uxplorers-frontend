import type { ChangeEvent } from 'react';
import type { InputPropsType } from './index.types';
import { useInput } from './index.styles';
import { useTheme } from '@emotion/react';

export default function Input({
  value,
  onValueChange,
  type = 'text',
  error,
  css,
  as: Component = 'input',
  ...rest
}: InputPropsType) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };
  const theme = useTheme();

  return (
    <Component
      css={[useInput(theme), ...(css ? [css] : [])]}
      type={type}
      value={value}
      onChange={handleChange}
      className={`input-field ${error ? 'input-error' : ''}`}
      {...rest}
    />
  );
}
