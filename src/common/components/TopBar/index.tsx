import React from 'react';
import type { TopBarPropsType } from './types';
import { container } from './index.styles';
import Flex from '../Flex';

export default function TopBar({
  exitButton,
  leftSlot,
  centerSlot,
  rightSlot,
}: TopBarPropsType) {
  return (
    <Flex
      boxSizing="border-box"
      justify="space-between"
      width="100%"
      css={container}
    >
      <div>
        {!!exitButton && exitButton}
        {leftSlot}
      </div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </Flex>
  );
}
