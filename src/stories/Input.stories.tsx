import Input from '../common/components/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Input',
  component: Input,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '동대구',
    onValueChange: (_) => {
      return;
    },
  },
};

export const EmptyState: Story = {
  args: {
    value: '',
    onValueChange: (_) => {
      return;
    },
    placeholder: '출발지 선택',
  },
};
