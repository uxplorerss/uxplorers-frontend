import React from 'react';
import { TopBarPropsType } from './types';
import { container } from './index.styles';

export default function TopBar({
  exitButton,
  leftSlot,
  centerSlot,
  rightSlot,
}: TopBarPropsType) {
  return (
    <div css={container}>
      <div>
        {!!exitButton && exitButton}
        {leftSlot}
      </div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </div>
  );
}
