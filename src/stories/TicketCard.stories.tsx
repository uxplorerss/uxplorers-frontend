import { Meta, StoryObj } from '@storybook/react';
import TicketCard from '../common/components/TicketCard';

const meta = {
  title: 'common/TicketCard',
  component: TicketCard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: new Date(),
    isExpress: false,
    company: 'Company Name',
    class: 'Economy',
    startId: 'start123',
    destIdList: ['dest1', 'dest2'],
    seats: [],
  },
};
