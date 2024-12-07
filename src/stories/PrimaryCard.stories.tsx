import { Meta, StoryObj } from '@storybook/react';
import PrimaryCard from '../common/components/PrimaryCard';
import RouteOptionRow from '../common/components/RouteOptionRow';
import SeatDetailsTable from '../common/components/SeatDetailsTable';
import FeeSumRow from '../common/components/FeeSumRow';
import { Ticket } from '../types';
import { ticket } from '../mock/ticket/fixture';
import { seats } from '../mock/seats/fixture';
import RouteRow from '../common/components/RouteRow';

const meta = {
  title: 'common/PrimaryCard',
  component: PrimaryCard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const totalFee = ticket.seats.reduce(
  (accumulator, seat) => accumulator + seat.fee,
  0
);

export const ActiveOption: Story = {
  args: {
    headerSlot: (
      <RouteOptionRow {...ticket} startName="동서울" destName="동대구" />
    ),
    children: <SeatDetailsTable {...ticket} />,
  },
};

export const InactiveOption: Story = {
  args: {
    headerSlot: (
      <RouteOptionRow
        {...ticket}
        startName="동서울"
        destName="동대구"
        inactive={true}
      />
    ),
    children: <SeatDetailsTable {...ticket} inactive={true} />,
  },
};

export const Active: Story = {
  args: {
    headerSlot: <RouteRow startName="동서울" destName="동대구" {...ticket} />,
    children: <SeatDetailsTable {...ticket} />,
  },
};

export const InActive: Story = {
  args: {
    headerSlot: (
      <RouteRow
        {...ticket}
        startName="동서울"
        destName="동대구"
        inactive={true}
      />
    ),
    children: <SeatDetailsTable {...ticket} inactive={true} />,
  },
};
