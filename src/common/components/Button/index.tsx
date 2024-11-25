import { container } from './index.styles';
import { ButtonPropsType } from './index.types';

export default function Button({ children, ...rest }: ButtonPropsType) {
  return (
    <button css={container} {...rest}>
      {children}
    </button>
  );
}
