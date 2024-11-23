import { Meta, StoryObj } from '@storybook/react';
import BottomBar from '../common/components/BottomBar';

const meta = {
  title: 'common/BottomBar',
  component: BottomBar,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
};
