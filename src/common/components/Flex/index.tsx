import type { FlexPropsType } from './index.types';
import { buildFlex } from './index.styles';

export default function Flex({
  children,
  align = 'center',
  justify = 'center',
  direction = 'row',
  gap = '0',
  wrap = 'nowrap',
  width = 'auto',
  as: Component = 'div',
  css,
  ...rest
}: FlexPropsType) {
  return (
    <Component
      css={[
        buildFlex({
          align,
          justify,
          direction,
          gap,
          wrap,
          width,
        }),
        ...(css ? [css] : []),
      ]}
      {...rest}
    >
      {children}
    </Component>
  );
}
