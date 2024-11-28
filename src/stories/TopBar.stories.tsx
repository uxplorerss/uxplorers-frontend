import type { Meta, StoryObj } from '@storybook/react';
import TopBar from '../common/components/TopBar';
import LogoIcon from '../assets/LogoIcon.svg?react';
import Button from '../common/components/Button';
import LanguageSwitchButton from '../common/components/LanguageSwitchButton';
import LeftArrowIcon from '../assets/LeftArrowIcon.svg?react';
import theme from '../theme';
import Typography from '../common/components/Typography';

const meta = {
  title: 'common/TopBar',
  component: TopBar,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    leftSlot: (
      <Button>
        <LogoIcon />
      </Button>
    ),
    rightSlot: <LanguageSwitchButton language="English" />,
  },
};

export const BackButton: Story = {
  args: {
    leftSlot: (
      <Button>
        <LeftArrowIcon />
      </Button>
    ),
  },
};

export const Payment: Story = {
  args: {
    leftSlot: (
      <Button>
        <LeftArrowIcon />
      </Button>
    ),
    centerSlot: (
      <Typography variant="body2" cx={{ fontSize: '1.125rem' }}>
        결제하기
      </Typography>
    ),
    rightSlot: (
      <Button cx={{ color: theme.colors.primary.base }}>
        <Typography variant="title4">결제수단</Typography>
      </Button>
    ),
  },
};
