import { css } from '@emotion/react';
import { FlexPropsType } from './index.types';

export const useFlex = ({
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
