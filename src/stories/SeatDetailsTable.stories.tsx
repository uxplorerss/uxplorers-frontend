import { Meta, StoryObj } from '@storybook/react';
import SeatDetailsTable from '../common/components/SeatDetailsTable';

const meta = {
  title: 'common/SeatDetailsTable',
  component: SeatDetailsTable,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    company: '중앙고속',
    seats: [
      { type: 'adults', fee: 15200, seatNum: 12 },
      { type: 'adults', fee: 15200, seatNum: 13 },
      { type: 'children', fee: 15000, seatNum: 14 },
      { type: 'children', fee: 15000, seatNum: 15 },
    ],
    destId: [],
  },
};
