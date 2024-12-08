import React from 'react';
import useReservationStore from '../../stores/useReservationStore';
import TicketCard from '../../common/components/TicketCard';
import {
  BottomBar,
  Button,
  LanguageSwitchButton,
  TopBar,
  Typography,
} from '../../common/components';
import StickyFooter from '../../common/components/StickyFooter';
import { useNavigate } from '@tanstack/react-router';
import { buttonContainer } from '../../common/components/BottomBar/index.styles';
import { buildTypography } from '../../common/components/Typography/index.styles';
import theme from '../../theme';
import StikcyHeader from '../../common/components/StickyHeader';

import LogoIcon from '../../common/components/LogoIcon';
import QRIcon from '../../assets/QRIcon_color.svg?react';
import TicketIcon from '../../assets/TicketIcon_nonc.svg?react';
import PersonIcon from '../../assets/PersonIcon.svg?react';
import { css } from '@emotion/react';
import MainButton from '../../common/components/MainButton';

export default function MyTicketListPage() {
  const ticketList = useReservationStore((state) => state.purchasedTicketList);
  const navigate = useNavigate();

  return (
    <div
      css={css`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <StikcyHeader>
        <TopBar
          leftSlot={
            <Button>
              <LogoIcon />
            </Button>
          }
          centerSlot={<Typography variant="title3">내 티켓</Typography>}
          rightSlot={<LanguageSwitchButton language="English" />}
        />
      </StikcyHeader>

      <div style={{ minHeight: '100vh' }}>
        {ticketList.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              margin: '50px 100px',
            }}
          >
            <Typography
              variant="body1"
              cx={{ color: theme.colors.gray[4], wordBreak: 'keep-all' }}
            >
              예매한 티켓이 없습니다.
            </Typography>
            <MainButton
              onClick={() => {
                navigate({ to: '/booking' });
              }}
              cx={{ marginTop: '100px', wordBreak: 'keep-all' }}
            >
              티켓 예매하러 가기
            </MainButton>
          </div>
        )}
        {ticketList.map((ticket) => (
          <TicketCard {...ticket} />
        ))}
      </div>

      <StickyFooter cx={{ bottom: 0 }}>
        <BottomBar
          leftSlot={
            <Button
              onClick={() => {
                navigate({ to: '/myTicket' });
              }}
              css={[
                buttonContainer,
                buildTypography(theme, 'caption1'),
                { color: theme.colors.gray[1] },
              ]}
            >
              <QRIcon />
              <span>내 티켓</span>
            </Button>
          }
          centerSlot={
            <Button
              onClick={() => {
                navigate({ to: '/booking' });
              }}
              css={[
                buttonContainer,
                buildTypography(theme, 'caption1'),
                { color: theme.colors.gray[1] },
              ]}
            >
              <TicketIcon />
              <span>예매하기</span>
            </Button>
          }
          rightSlot={
            <Button
              css={[
                buttonContainer,
                buildTypography(theme, 'caption1'),
                { color: theme.colors.gray[1] },
              ]}
            >
              <PersonIcon />
              <span>마이페이지</span>
            </Button>
          }
        />
      </StickyFooter>
    </div>
  );
}
