import { ComponentPropsWithoutRef } from 'react';
import { container } from './index.styles';

export default function Button({
  children,
  ...rest
}: { children: React.ReactNode } & ComponentPropsWithoutRef<'button'>) {
  return (
    <button css={container} {...rest}>
      {children}
    </button>
  );
}
