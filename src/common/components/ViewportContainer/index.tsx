import React from 'react';
import { ViewportContainerPropsType } from './index.types';
import Flex from '../Flex';
import { viewportContainer } from './index.styles';

export default function ViewportContainer({
  children,
  cx,
}: ViewportContainerPropsType) {
  return (
    <Flex
      direction="column"
      width="100%"
      boxSizing="border-box"
      cx={[viewportContainer, cx]}
      justify="start"
      align="center"
    >
      {children}
    </Flex>
  );
}
