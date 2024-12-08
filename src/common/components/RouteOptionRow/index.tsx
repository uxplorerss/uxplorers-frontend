import React from 'react';
import { RouteOptionRowPropsType } from './index.types';
import Flex from '../Flex';
import ArrowRightWhiteIcon from '../../../assets/ArrowRightWhiteIcon.svg?react';
import ArrowRightGrayIcon from '../../../assets/ArrowRightGrayIcon.svg?react';
import { buildContainerStyles } from './index.styles';
import { useTheme } from '@emotion/react';
import CheckCircleOutlinedIcon from '../../../assets/CheckCircleOutlinedIcon.svg?react';
import CheckboxEmptyCircleIcon from '../../../assets/CheckboxEmptyCircleIcon.svg?react';
import Typography from '../Typography';

export default function RouteOptionRow({
  startName,
  destName,
  inactive = false,
}: RouteOptionRowPropsType) {
  const theme = useTheme();
  return (
    <Flex
      direction="row"
      justify="start"
      align="center"
      gap="9px"
      css={buildContainerStyles(theme, inactive)}
    >
      <Flex
        justify="center"
        align="center"
        css={{
          width: '36px',
          height: '36px',
        }}
      >
        {inactive ? <CheckboxEmptyCircleIcon /> : <CheckCircleOutlinedIcon />}
      </Flex>
      <Typography variant="title2">{startName}</Typography>
      {inactive ? <ArrowRightGrayIcon /> : <ArrowRightWhiteIcon />}
      <Typography variant="title2">{destName}</Typography>
    </Flex>
  );
}
