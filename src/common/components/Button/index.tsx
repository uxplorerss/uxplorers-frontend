import { container } from './index.styles';
import type { ButtonPropsType } from './index.types';

export default function Button({
  children,
  type = 'button',
  ...rest
}: ButtonPropsType) {
  return (
    <button css={container} type={type} {...rest}>
      {children}
    </button>
  );
}
