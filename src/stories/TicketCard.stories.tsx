import { Meta, StoryObj } from '@storybook/react';
import TicketCard from '../common/components/TicketCard';

const meta = {
  title: 'common/TicketCard',
  component: TicketCard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
