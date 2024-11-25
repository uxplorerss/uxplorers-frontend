import type { FlexPropsType } from './index.types';
import { buildFlex } from './index.styles';

export default function Flex({
  children,
  align = 'center',
  justify = 'center',
  direction = 'row',
  gap = '0',
  wrap = 'nowrap',
  width = '100%',
  ...rest
}: FlexPropsType) {
  return (
    <div
      css={buildFlex({
        align,
        justify,
        direction,
        gap,
        wrap,
        width,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
