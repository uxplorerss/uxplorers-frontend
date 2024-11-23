import { Meta, StoryObj } from '@storybook/react';
import Card from '../common/components/Card';

const meta = {
  title: 'common/Card',
  component: Card,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
