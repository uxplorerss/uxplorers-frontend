import type { Meta, StoryObj } from '@storybook/react';
import Button from '../common/components/Button';

const meta = {
  title: 'common/Button',
  component: Button,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>안녕하세요</>,
  },
};
