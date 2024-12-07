import { Meta, StoryObj } from '@storybook/react';
import BookingConfirmationPage from '../pages/BookingConfirmationPage';
import { ReactNode, useEffect } from 'react';
import useTicketListStore from '../stores/useTicketListStore';
import { tickets } from '../mock/ticket/fixture';
import TicketListProvider from '../mock/ticket';

const meta = {
  title: 'Pages/BookingConfirmationPage',
  component: BookingConfirmationPage,
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
