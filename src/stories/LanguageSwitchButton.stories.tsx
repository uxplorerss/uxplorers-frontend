import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitchButton from '../common/components/LanguageSwitchButton';

const meta = {
  title: 'common/LanguageSwitchButton',
  component: LanguageSwitchButton,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Korean: Story = {
  args: {
    language: 'Korean',
  },
};

export const English: Story = {
  args: {
    language: 'English',
  },
};
