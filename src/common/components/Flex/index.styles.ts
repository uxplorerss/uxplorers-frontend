import { css } from '@emotion/react';
import type { FlexPropsType } from './index.types';

export const buildFlex = ({
  justify,
  align,
  direction,
  wrap,
  gap,
  width,
}: FlexPropsType) =>
  css({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    gap,
    width,
  });
