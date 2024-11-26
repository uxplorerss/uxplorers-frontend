import type { Meta, StoryObj } from '@storybook/react';
import TopBar from '../common/components/TopBar';
import LogoIcon from '../assets/LogoIcon.svg?react';
import { css } from '@emotion/react';
import Button from '../common/components/Button';
import LanguageSwitchButton from '../common/components/LanguageSwitchButton';
import LeftArrowIcon from '../assets/LeftArrowIcon.svg?react';
import { buildTypography } from '../common/components/Typography/index.styles';
import theme from '../theme';

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
      <div
        css={css([buildTypography(theme, 'body2'), { fontSize: '1.125rem' }])}
      >
        결제하기
      </div>
    ),
    rightSlot: (
      <Button
        css={css([
          buildTypography(theme, 'title4'),
          {
            color: theme.colors.primary.base,
          },
        ])}
      >
        결제수단
      </Button>
    ),
  },
};
