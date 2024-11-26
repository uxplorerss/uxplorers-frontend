import React from 'react';
import type { CardPropsType } from './types';
import { container } from './index.styles';

export default function Card({ header, body, footer }: CardPropsType) {
  return (
    <div css={container}>
      {header}
      {body}
      {footer}
    </div>
  );
}
