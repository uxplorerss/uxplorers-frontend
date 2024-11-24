import { css } from '@emotion/react';
import React, { CSSProperties, ReactNode } from 'react';
import { FlexPropsType } from './index.types';
import { useFlex } from './index.styles';

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
      css={useFlex({
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
