import { Meta, StoryObj } from '@storybook/react';
import BookingConfirmationPage from '../pages/BookingConfirmationPage';
import BusListProvider from '../mock/bus';
import SeatListProvider from '../mock/seats';

const meta = {
  title: 'Pages/BookingConfirmationPage',
  component: BookingConfirmationPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: (Story) => {
    return (
      <BusListProvider>
        <SeatListProvider>
          <Story />
        </SeatListProvider>
      </BusListProvider>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
