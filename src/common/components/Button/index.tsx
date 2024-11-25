import { container } from './index.styles';
import { ButtonPropsType } from './index.types';

export default function Button({
  children,
  type = 'button',
  css,
  as: Component = 'button',
  ...rest
}: ButtonPropsType) {
  return (
    <Component css={[container, ...(css ? [css] : [])]} type={type} {...rest}>
      {children}
    </Component>
  );
}
