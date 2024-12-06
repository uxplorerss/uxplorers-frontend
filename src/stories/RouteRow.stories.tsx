import { Meta, StoryObj } from '@storybook/react';
import RouteRow from '../common/components/RouteRow';

const meta = {
  title: 'common/RouteRow',
  component: RouteRow,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startName: '동서울',
    destName: '부산해운대',
    isActivated: true,
  },
};
