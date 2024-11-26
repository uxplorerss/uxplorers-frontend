import type { Meta, StoryObj } from '@storybook/react';
import MainButton from '../common/components/MainButton';
import Flex from '../common/components/Flex';
import { css } from '@emotion/react';
import theme from '../theme';
import { Typography } from '../common/components';

const meta = {
  title: 'common/MainButton',
  component: MainButton,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>조회하기</>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <>조회하기</>,
  },
};

export const Payment: Story = {
  args: {
    children: (
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
    ),
  },
};
