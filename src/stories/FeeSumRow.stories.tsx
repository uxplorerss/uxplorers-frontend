import { Meta, StoryObj } from '@storybook/react';
import FeeSumRow from '../common/components/FeeSumRow';

const meta = {
  title: 'common/FeeSumRow',
  component: FeeSumRow,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalFee: 35000,
  },
};
