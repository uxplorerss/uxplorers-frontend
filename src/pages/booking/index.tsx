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
  DatePickerWrapper,
  bottomBarWrapper,
} from './index.styles';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import LogoIcon from '../../common/components/LogoIcon';
import Button from '../../common/components/Button';
import Typography from '../../common/components/Typography';
import QRIcon from '../../assets/QRIcon.svg?react';
import TicketIcon from '../../assets/TicketIcon.svg?react';
import PersonIcon from '../../assets/PersonIcon.svg?react';
import { buildTypography } from '../../common/components/Typography/index.styles';
import { container as buttonContainer } from '../../common/components/Button/index.styles';
import theme from '../../theme';
import { css } from '@emotion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import terminalData from "../../constants/terminal.json";

import useSearchQueryStore from '../../stores/useSearchQueryStore';

function BookmarkList() {
  return (
    <div style={{ padding: '0 20px'}}>
      <Typography variant="body1" as="p">
        즐겨찾기
      </Typography>
      <Input value="서울 경부 → 구미" />
    </div>
  );
}

function BookingPage() {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearchQueryStore();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [check, setCheck] = useState({
    departure: searchQuery.startId,
    destination: searchQuery.destId,
    date: searchQuery.startDate,
    roundTrip: false,
  });

  console.log(searchQuery);

  const isSearchable = () => {
    return searchQuery.startId !== '' && searchQuery.destId !== '';
  };

  console.log(check);

  const formatDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayNames[today.getDay()];

    return `${month}. ${date} (${day})`;
  };

  const tmnCdToTmnNm = (tmnCd: string | number) => {
    const terminal = terminalData.response.body.items.item.find((terminal) => terminal.tmnCd.toString() === tmnCd.toString());
    return terminal?.tmnNm;
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
          value={tmnCdToTmnNm(searchQuery.startId)}
          onValueChange={(value: string) => {
            // setCheck({
            //   ...check,
            //   departure: value,
            // });
            setSearchQuery({
              startId: value,
            });
          }}
          onClick={() => {
            navigate({ to: '/booking/departLocation' });
          }}
        />
        <Input
          type="text"
          placeholder="도착지 선택"
          value={tmnCdToTmnNm(searchQuery.destId)}
          onValueChange={(value: string) => {
            // setCheck({
            //   ...check,
            //   destination: value,
            // });
            setSearchQuery({
              destId: value,
            });
          }}
          onClick={() => {
            navigate({ to: '/booking/arrivalLocation' });
          }}
        />
        <div css={dateSelector}>
          <Input
            css={dateBox}
            placeholder={formatDate()}
            value={formatDate()}
            onValueChange={(value: Date) => {
              // setCheck({
              //   ...check,
              //   date: value,
              // });
              setSearchQuery({
                startDate: value,
              })
            }}
          />
                    <div css={dateBox}>
            {showDatePicker ? (
              <div css={DatePickerWrapper}>
              <DatePicker
                selected={searchQuery.destDate}
                onChange={(date: Date | undefined) => {
                  setSearchQuery({
                    destDate: date
                  });
                  setShowDatePicker(false);
                }}
                minDate={searchQuery.startDate}
                placeholderText="왕복 날짜 선택"
                />
              </div>
            ) : (
              <Input
                css={dateBox}
            placeholder="+왕복 선택"
            value=""
            onClick={() => {
                setShowDatePicker(true);
              }}
            />
            )}
          </div>
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
      <BookmarkList />

      <div css={bottomBarWrapper}>
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
    </div>
  );
}

export default BookingPage;
