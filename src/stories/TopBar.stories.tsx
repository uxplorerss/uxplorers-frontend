import { Meta, StoryObj } from '@storybook/react';
import TopBar from '../common/components/TopBar';

const meta = {
  title: 'common/TopBar',
  component: TopBar,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
