import React from 'react';
import { PrimaryCardPropsType } from './index.types';
import { useTheme } from '@emotion/react';
import Flex from '../Flex';
import { buildContainerStyles, paddingContainer } from './index.styles';

export default function PrimaryCard({
  headerSlot,
  bodySlot,
  footerSlot,
  as: Component = 'ul',
  cx,
}: PrimaryCardPropsType) {
  const theme = useTheme();
  return (
    <Component css={buildContainerStyles(theme)}>
      {headerSlot}
      <Flex justify="center" align="center" cx={[paddingContainer, cx]}>
        {bodySlot}
      </Flex>
      <Flex
        justify="center"
        align="center"
        cx={[{ padding: '0px 20px 20px 0px' }, cx]}
      >
        {footerSlot}
      </Flex>
    </Component>
  );
}
