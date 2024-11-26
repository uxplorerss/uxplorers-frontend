import React from 'react';
import type { ActionBarPropsType } from './index.types';
import Flex from '../Flex';
import { css, useTheme } from '@emotion/react';
import Typography from '../Typography';

export default function ActionBar({
  bodySlot,
  actionSlot,
}: ActionBarPropsType) {
  const theme = useTheme();
  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      css={css({
        margin: '20px 20px 34px 20px',
      })}
    >
      <Typography
        as="p"
        variant="body4"
        css={css({
          color: theme.colors.gray[4],
        })}
      >
        일반 1, 초등생 1
      </Typography>
      {bodySlot}
      {actionSlot}
    </Flex>
  );
}
