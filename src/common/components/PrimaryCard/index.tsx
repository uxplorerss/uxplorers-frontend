import React from 'react';
import { PrimaryCardPropsType } from './index.types';
import { useTheme } from '@emotion/react';
import Flex from '../Flex';
import {
  buildContainerStyles,
  horizontalPaddingStyles,
  paddingContainer,
} from './index.styles';

export default function PrimaryCard({
  headerSlot,
  children,
  as: Component = 'ul',
  cx,
}: PrimaryCardPropsType) {
  const theme = useTheme();
  return (
    <Component css={buildContainerStyles(theme)}>
      {headerSlot}
      <Flex
        direction="column"
        justify="start"
        align="start"
        width="100%"
        boxSizing="border-box"
        cx={[horizontalPaddingStyles, cx]}
      >
        {children}
      </Flex>
    </Component>
  );
}
