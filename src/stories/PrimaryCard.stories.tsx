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

const ticketDetails = {
  ...ticket,
  startName: '동서울',
  destName: '대구',
};

const totalFee = ticketDetails.seats.reduce(
  (accumulator, seat) => accumulator + seat.fee,
  0
);

export const ActiveOption: Story = {
  args: {
    headerSlot: <RouteOptionRow {...ticketDetails} />,
    children: <SeatDetailsTable {...ticketDetails} />,
  },
};

export const InactiveOption: Story = {
  args: {
    headerSlot: <RouteOptionRow {...ticketDetails} inactive={true} />,
    children: <SeatDetailsTable {...ticketDetails} inactive={true} />,
  },
};

export const Active: Story = {
  args: {
    headerSlot: <RouteRow {...ticketDetails} />,
    children: <SeatDetailsTable {...ticketDetails} />,
  },
};

export const InActive: Story = {
  args: {
    headerSlot: <RouteRow {...ticketDetails} inactive={true} />,
    children: <SeatDetailsTable {...ticketDetails} inactive={true} />,
  },
};
