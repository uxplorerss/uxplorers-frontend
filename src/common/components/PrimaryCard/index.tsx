import { PrimaryCardPropsType } from './index.types';
import { useTheme } from '@emotion/react';
import { buildContainerStyles, horizontalPaddingStyles } from './index.styles';

export default function PrimaryCard({
  headerSlot,
  children,
  as: Component = 'ul',
  cx,
}: PrimaryCardPropsType) {
  const theme = useTheme();
  return (
    <Component css={[buildContainerStyles(theme), cx]}>
      {headerSlot}
      <div css={[horizontalPaddingStyles]}>{children}</div>
    </Component>
  );
}
