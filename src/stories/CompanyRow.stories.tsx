import { Meta, StoryObj } from '@storybook/react';
import CompanyRow from '../common/components/CompanyRow';
import { ticket } from '../mock/ticket/fixture';

const meta = {
  title: 'common/CompanyRow',
  component: CompanyRow,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ticket,
  },
};
