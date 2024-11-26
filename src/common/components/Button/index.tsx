import { container } from './index.styles';
import type { ButtonPropsType } from './index.types';

export default function Button({
  children,
  type = 'button',
  cx,
  as: Component = 'button',
  ...rest
}: ButtonPropsType) {
  return (
    <Component css={[container, cx]} type={type} {...rest}>
      {children}
    </Component>
  );
}
