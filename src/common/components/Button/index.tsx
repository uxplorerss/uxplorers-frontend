import { container } from './index.styles';
import type { ButtonPropsType } from './index.types';

export default function Button({
  children,
  type = 'button',
  css,
  as: Component = 'button',
  ...rest
}: ButtonPropsType) {
  return (
    <Component css={[container].concat(css ?? [])} type={type} {...rest}>
      {children}
    </Component>
  );
}
