import { Meta, StoryObj } from '@storybook/react';
import RouteOptionRow from '../common/components/RouteOptionRow';

const meta = {
  title: 'common/RouteOptionRow',
  component: RouteOptionRow,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    startName: '동서울',
    destName: '부산해운대',
    inactive: false,
  },
};

export const Disabled: Story = {
  args: {
    startName: '동서울',
    destName: '부산해운대',
    inactive: true,
  },
};
