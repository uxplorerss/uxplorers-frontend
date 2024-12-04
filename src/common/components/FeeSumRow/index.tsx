import React from 'react';
import { FeeSumRowPropsType } from './index.types';
import Flex from '../Flex';
import Typography from '../Typography';
import { useTheme } from '@emotion/react';

const getLocalStringNumber = (num: number) => num.toLocaleString();

export default function FeeSumRow({ totalFee }: FeeSumRowPropsType) {
  const theme = useTheme();
  const localeStringNumber = getLocalStringNumber(totalFee);
  return (
    <Flex justify="flex-end" align="center" width="100%" boxSizing="border-box">
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
