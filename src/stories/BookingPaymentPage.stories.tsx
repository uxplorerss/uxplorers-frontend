import { Meta, StoryObj } from '@storybook/react';
import BookingPaymentPage from '../pages/BookingPaymentPage';
import PendingTicketListProvider from '../mock/ticket';

const meta = {
  title: 'pages/BookingPaymentPage',
  component: BookingPaymentPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: (Story) => {
    return (
      <PendingTicketListProvider>
        <Story />
      </PendingTicketListProvider>
    );
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
