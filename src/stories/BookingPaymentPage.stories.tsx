import { Meta, StoryObj } from '@storybook/react';
import BookingPaymentPage from '../pages/BookingPaymentPage';
import TicketListProvider from '../mock/ticket';

const meta = {
  title: 'pages/BookingPaymentPage',
  component: BookingPaymentPage,
  decorators: (Story) => {
    return (
      <TicketListProvider>
        <Story />
      </TicketListProvider>
    );
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
