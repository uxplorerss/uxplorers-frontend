import { Meta, StoryObj } from '@storybook/react';
import PaymentConfirmation from '../common/components/PaymentConfirmation';

const meta = {
  title: 'pages/PaymentConfirmationPage',
  component: PaymentConfirmation,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
