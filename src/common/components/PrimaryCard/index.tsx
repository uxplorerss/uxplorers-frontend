import React from 'react';
import { PrimaryCardPropsType } from './index.types';
import { useTheme } from '@emotion/react';
import Flex from '../Flex';
import {
  buildBodyContainerStyles,
  buildContainerStyles,
  paddingContainer,
} from './index.styles';

export default function PrimaryCard({
  headerSlot,
  bodySlot,
  footerSlot,
  as: Component = 'ul',
  cx,
}: PrimaryCardPropsType) {
  const [hasHeaderValue, hasFooterValue] = [!!headerSlot, !!footerSlot];
  const theme = useTheme();
  return (
    <Component css={buildContainerStyles(theme)}>
      {headerSlot}
      <Flex
        justify="center"
        align="center"
        cx={[
          buildBodyContainerStyles(theme, hasHeaderValue, hasFooterValue),
          paddingContainer,
          cx,
        ]}
      >
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
