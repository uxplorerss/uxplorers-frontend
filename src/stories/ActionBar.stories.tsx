import type { Meta, StoryObj } from '@storybook/react';
import ActionBar from '../common/components/ActionBar';
import { css } from '@emotion/react';
import theme from '../theme';
import { Typography } from '../common/components';
import Flex from '../common/components/Flex';
import MainButton from '../common/components/MainButton';

const meta = {
  title: 'common/ActionBar',
  component: ActionBar,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

console.log(theme.colors.gray[4]);
console.log(typeof theme.colors.gray[4]);
console.log(
  css({
    color: theme.colors.gray[4],
  })
);

export const PaymentAction: Story = {
  args: {
    bodySlot: (
      <Flex
        justify="space-between"
        align="start"
        cx={css({ width: '100%', boxSizing: 'border-box' })}
      >
        <Flex direction="column" justify="start" align="start">
          <Typography
            variant="title4"
            cx={{
              color: theme.colors.gray.black,
            }}
          >
            총 결제금액
          </Typography>
          <Typography
            variant="body3"
            cx={{
              color: theme.colors.gray[4],
            }}
          >
            일반 1, 초등생 1
          </Typography>
        </Flex>
        <Typography
          variant="title1"
          cx={{
            color: theme.colors.gray.black,
          }}
        >
          32,200원
        </Typography>
      </Flex>
    ),
    actionSlot: <MainButton>결제하기</MainButton>,
  },
};

export const PaymentActionWithQuantity: Story = {
  args: {
    actionSlot: (
      <MainButton>
        <Flex gap="20px">
          <span>30,200원 결제하기</span>
          <Flex
            cx={css({
              borderRadius: theme.radii.circle,
              width: '27px',
              height: '27px',
              backgroundColor: theme.colors.gray.white,
              color: theme.colors.gray.black,
            })}
          >
            <Typography variant="body3">3</Typography>
          </Flex>
        </Flex>
      </MainButton>
    ),
  },
};
