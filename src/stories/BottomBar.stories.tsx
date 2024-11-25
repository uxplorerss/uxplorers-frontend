import { Meta, StoryObj } from '@storybook/react';
import BottomBar from '../common/components/BottomBar';
import PersonIcon from '../assets/PersonIcon.svg?react';
import QRIcon from '../assets/QRIcon.svg?react';
import TicketIcon from '../assets/TicketIcon.svg?react';
import { container as buttonContainer } from '../common/components/Button/index.styles';
import theme from '../theme';
import { buildTypography } from '../common/components/Typography/index.styles';

const meta = {
  title: 'common/BottomBar',
  component: BottomBar,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftSlot: (
      <>
        <button
          type="button"
          onClick={() => {}}
          css={[
            buttonContainer,
            buildTypography(theme, 'caption1'),
            {
              color: theme.colors.gray[1],
            },
          ]}
        >
          <span>
            <QRIcon />
          </span>
          <span>내 티켓</span>
        </button>
      </>
    ),
    centerSlot: (
      <>
        <button
          type="button"
          onClick={() => {}}
          css={[
            buttonContainer,
            buildTypography(theme, 'caption1'),
            {
              color: theme.colors.gray[1],
            },
          ]}
        >
          <span>
            <TicketIcon />
          </span>
          <span>예매하기</span>
        </button>
      </>
    ),
    rightSlot: (
      <>
        <button
          type="button"
          onClick={() => {}}
          css={[
            buttonContainer,
            buildTypography(theme, 'caption1'),
            {
              color: theme.colors.gray[1],
            },
          ]}
        >
          <span>
            <PersonIcon />
          </span>
          <span>마이페이지</span>
        </button>
      </>
    ),
  },
};
