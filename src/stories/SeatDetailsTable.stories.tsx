import { Meta, StoryObj } from '@storybook/react';
import SeatDetailsTable from '../common/components/SeatDetailsTable';
import { ticket } from '../mock/ticket/fixture';

const meta = {
  title: 'common/SeatDetailsTable',
  component: SeatDetailsTable,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    ...ticket,
  },
};

export const Disabled: Story = {
  args: {
    ...ticket,
    inactive: true,
  },
};
