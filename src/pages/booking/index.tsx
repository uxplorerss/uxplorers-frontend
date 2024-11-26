import TopBar from '../../common/components/TopBar';
import BottomBar from '../../common/components/BottomBar';
import Input from '../../common/components/Input';
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

         <Typography variant="title1" as="p">
           어디로 갈까요?
         </Typography>

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
        <button
          css={searchButton}
          onClick={() => {
            if (isSearchable()) {
              navigate({ to: '/booking/tickets' });
            }
          }}
        >
          조회하기
        </button>
      </main>

      <BottomBar
        leftSlot={<span>승차권 확인</span>}
        centerSlot={<span>예매하기</span>}
        rightSlot={<span>마이페이지</span>}
      />
    </div>
  );
}

export default BookingPage;
