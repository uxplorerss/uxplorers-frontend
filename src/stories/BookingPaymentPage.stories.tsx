import { Meta, StoryObj } from '@storybook/react';
import BookingPaymentPage from '../pages/BookingPaymentPage';
import { ReactNode, useEffect } from 'react';
import useTicketListStore from '../stores/useTicketListStore';
import { tickets } from '../mock/ticket/fixture';

function TicketListProvider({ children }: { children: ReactNode }) {
  useSetTicketList();
  return <>{children}</>;
}

function useSetTicketList() {
  useEffect(() => {
    useTicketListStore.setState({ ticketList: tickets });
    return () => {
      useTicketListStore.setState({ ticketList: [] });
    };
  });
}

const meta = {
  title: 'Pages/BookingPaymentPage',
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

export const Default: Story = {};
