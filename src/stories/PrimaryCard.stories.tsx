import { Meta, StoryObj } from '@storybook/react';
import PrimaryCard from '../common/components/PrimaryCard';
import RouteRow from '../common/components/RouteRow';
import SeatDetailsTable from '../common/components/SeatDetailsTable';
import FeeSumRow from '../common/components/FeeSumRow';
import { Ticket } from '../types';
import { ticket } from '../mock/ticket/fixture';
import { seats } from '../mock/seats/fixture';

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

export const Default: Story = {
  args: {
    headerSlot: <RouteRow {...ticketDetails} />,
    bodySlot: <SeatDetailsTable {...ticketDetails} />,
    footerSlot: <FeeSumRow totalFee={totalFee} />,
  },
};
