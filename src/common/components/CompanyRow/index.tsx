import React from 'react';
import Flex from '../Flex';
import Typography from '../Typography';
import { useTheme } from '@emotion/react';
import { CompanyRowPropsType } from './index.types';
import { Divider } from '../Divider';
import Button from '../Button';

export default function CompanyRow({
  destIdList,
  company,
  cx,
}: CompanyRowPropsType) {
  const hasStops = destIdList.length > 1;
  const theme = useTheme();
  return (
    <Flex justify="space-between" width="100%" boxSizing="border-box" cx={cx}>
      <Flex direction="row" justify="start" gap="8px">
        <Typography
          variant="body3"
          as="div"
          cx={{
            padding: '3.5px 8px',
            backgroundColor: theme.colors.gray[3],
            color: theme.colors.gray[4],
            borderRadius: '9px',
          }}
        >
          {hasStops ? '무정차' : '경유'}
        </Typography>

        <Typography
          variant="title4"
          cx={{
            color: theme.colors.gray.black,
          }}
        >
          {company}
        </Typography>
        <Divider orientation="vertical" />
        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[0],
          }}
        >
          우등
        </Typography>
      </Flex>
      <Button cx={{ color: theme.colors.primary.base }}>
        <Typography variant="title4">수정</Typography>
      </Button>
    </Flex>
  );
}
