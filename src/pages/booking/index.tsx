import TopBar from '../../common/components/TopBar';
import BottomBar from '../../common/components/BottomBar';
import Input from '../../common/components/Input';
import MainButton from '../../common/components/MainButton';
import {
  container,
  mainContent,
  dateSelector,
  dateBox,
  addDateButton,
  searchButton,
} from './index.styles';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import LogoIcon from '../../common/components/LogoIcon';
import Button from '../../common/components/Button';
import Typography from '../../common/components/Typography';
import QRIcon from '../../assets/QRIcon.svg?react';
import TicketIcon from '../../assets/TicketIcon.svg?react';
import PersonIcon from '../../assets/PersonIcon.svg?react';
import { useTheme } from '@emotion/react';
import { buildTypography } from '../../common/components/Typography/index.styles';
import { container as buttonContainer } from '../../common/components/Button/index.styles';
import theme from '../../theme';
import { css } from '@emotion/react';
import { TERMINAL_REGIONS } from '../../constants/terminal_region';

function BookingPage() {
  const navigate = useNavigate();

  const [check, setCheck] = useState({
    departure: '',
    destination: '',
    date: '',
    roundTrip: false,
  });

  const isSearchable = () => {
    const { departure, destination, date } = check;
    return departure !== '' && destination !== '' && date !== '';
  };

  const formatDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayNames[today.getDay()];

    return `${month}. ${date} (${day})`;
  };

  return (
    <div css={container}>
      <TopBar
        leftSlot={
          <Button>
            <LogoIcon />
          </Button>
        }
      />

      <div css={css`
        text-align: center;
        margin: 24px 0;
      `}>
        <Typography variant="title1" as="p">
          어디로 갈까요?
        </Typography>
      </div>

      <main css={mainContent}>
        <Input
          type="text"
          placeholder="출발지 선택"
          value=""
          onValueChange={(value: string) => {
            setCheck({
              ...check,
              departure: value,
            });
          }}
          onClick={() => {
            navigate({ to: '/booking/location' });
          }}
        />
        <Input
          type="text"
          placeholder="도착지 선택"
          value=""
          onValueChange={(value: string) => {
            setCheck({
              ...check,
              destination: value,
            });
          }}
          onClick={() => {
            navigate({ to: '/booking/location' });
          }}
        />
        <div css={dateSelector}>
          <Input
            css={dateBox}
            placeholder={formatDate()}
            value={formatDate()}
            onValueChange={(value: string) => {
              setCheck({
                ...check,
                date: value,
              });
            }}
          />
          <Input
            css={dateBox}
            placeholder="+왕복 선택"
            value=""
            onValueChange={(value: string) => {
              setCheck({
                ...check,
                roundTrip: value === '왕복',
              });
            }}
          />
        </div>
        <MainButton 
          children="조회하기"
          disabled={!isSearchable()} 
          onClick={() => {
            if (isSearchable()) {
              navigate({ to: '/booking/tickets' });
            }
          }}
        />
      </main>

      <BottomBar
        leftSlot={
          <Button css={[buttonContainer, buildTypography(theme, 'caption1'), { color: theme.colors.gray[1] }]}>
            <QRIcon />
            <span>내 티켓</span>
          </Button>
        }
        centerSlot={
          <Button css={[buttonContainer, buildTypography(theme, 'caption1'), { color: theme.colors.gray[1] }]}>
            <TicketIcon />
            <span>예매하기</span>
          </Button>
        }
        rightSlot={
          <Button css={[buttonContainer, buildTypography(theme, 'caption1'), { color: theme.colors.gray[1] }]}>
            <PersonIcon />
            <span>마이페이지</span>
          </Button>
        }
      />
    </div>
  );
}

export default BookingPage;
