import React from 'react';
import { FeeSumRowPropsType } from './index.types';
import Flex from '../Flex';
import Typography from '../Typography';
import { useTheme } from '@emotion/react';
import { getLocaleStringNumber } from '../../../lib';

export default function FeeSumRow({ totalFee, ...props }: FeeSumRowPropsType) {
  const theme = useTheme();
  const localeStringNumber = getLocaleStringNumber(totalFee);
  return (
    <Flex
      justify="flex-end"
      align="center"
      width="100%"
      boxSizing="border-box"
      {...props}
    >
      <Typography
        variant="title3"
        cx={{
          color: theme.colors.primary.base,
        }}
      >
        {localeStringNumber}원
      </Typography>
    </Flex>
  );
}
