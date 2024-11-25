import { container } from './index.styles';
import { ButtonPropsType } from './index.types';

export default function Button({
  children,
  type = 'button',
  css,
  ...rest
}: ButtonPropsType) {
  return (
    <button css={[container, ...(css ? [css] : [])]} type={type} {...rest}>
      {children}
    </button>
  );
}
