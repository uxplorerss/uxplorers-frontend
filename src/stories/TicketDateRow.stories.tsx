import { Meta, StoryObj } from '@storybook/react';
import TicketDateRow from '../common/components/TicketDateRow';

const meta = {
  title: 'common/TicketDateRow',
  component: TicketDateRow,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Now: Story = {
  args: {
    startDate: new Date(),
  },
};
