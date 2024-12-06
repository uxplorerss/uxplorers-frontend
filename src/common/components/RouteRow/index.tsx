import React from 'react';
import { RouteRowPropsType } from './index.types';
import Flex from '../Flex';
import ArrowRightLongIcon from '../../../assets/ArrowRightLongIcon.svg?react';
import { buildContainerStyles } from './index.styles';
import { useTheme } from '@emotion/react';
import CheckCircleOutlinedIcon from '../../../assets/CheckCircleOutlinedIcon.svg?react';
import Typography from '../Typography';

export default function RouteRow({
  startName,
  destName,
  isActivated = true,
}: RouteRowPropsType) {
  const theme = useTheme();
  return (
    <Flex
      direction="row"
      justify="start"
      align="center"
      gap="9px"
      css={buildContainerStyles(theme, isActivated)}
    >
      <Flex
        justify="center"
        align="center"
        css={{
          width: '36px',
          height: '36px',
        }}
      >
        <CheckCircleOutlinedIcon />
      </Flex>
      <Typography variant="button1">{startName}</Typography>
      <ArrowRightLongIcon />
      <Typography variant="button1">{destName}</Typography>
    </Flex>
  );
}
