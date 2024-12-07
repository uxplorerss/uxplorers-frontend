import React from 'react';
import SecondaryCard from '../../SecondaryCard';
import Flex from '../../Flex';
import Typography from '../../Typography';
import MileageIcon from '../../../../assets/MileageIcon.svg?react';
import Button from '../../Button';
import { buildInput } from '../../../../common//components/Input/index.styles';
import RightArrowIcon from '../../../../assets/RightArrowIcon.svg?react';
import { useTheme } from '@emotion/react';

export default function CouponAndMileageCard() {
  const theme = useTheme();
  return (
    <SecondaryCard titleSlot="쿠폰 및 GO마일리지">
      <Button
        cx={[
          buildInput(theme),
          {
            width: '100%',
            margin: '14px 0 12px 0',
          },
        ]}
      >
        <Flex justify="space-between" width="100%">
          <Typography
            as="div"
            variant="body4"
            cx={{
              color: theme.colors.gray[1],
            }}
          >
            적용 가능한 쿠폰 0
          </Typography>
          <Flex
            justify="center"
            align="center"
            cx={{
              width: '24px',
              height: '24px',
            }}
          >
            <RightArrowIcon />
          </Flex>
        </Flex>
      </Button>
      <Flex justify="start" align="center" gap="8px">
        <MileageIcon />
        <Typography variant="body4" cx={{ color: theme.colors.gray[0] }}>
          쿠폰 및 GO마일리지 0M
        </Typography>
      </Flex>
    </SecondaryCard>
  );
}
