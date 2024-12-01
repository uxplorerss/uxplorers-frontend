import TopBar from '../../common/components/TopBar';
import BottomBar from '../../common/components/BottomBar';
import Input from '../../common/components/Input';
import MainButton from '../../common/components/MainButton';
import LogoIcon from '../../common/components/LogoIcon';
import Button from '../../common/components/Button';
import Typography from '../../common/components/Typography';
import {
  container,
  mainContent,
  dateSelector,
  dateBox,
  searchButton,
  DatePickerWrapper,
  bottomBarWrapper,
  transferButtonWrapper,
  locationInputsWrapper,
} from './index.styles';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import QRIcon from '../../assets/QRIcon.svg?react';
import TicketIcon from '../../assets/TicketIcon.svg?react';
import PersonIcon from '../../assets/PersonIcon.svg?react';
import TransferBtn from '../../assets/booking/btn_transfer.svg?react';
import LeftArrowMonthIcon from '../../assets/booking/btn_leftArrowMonth.svg?react';
import RightArrowMonthIcon from '../../assets/booking/btn_rightArrowMonth.svg?react';

import { buildTypography } from '../../common/components/Typography/index.styles';
import { container as buttonContainer } from '../../common/components/Button/index.styles';
import theme from '../../theme';
import { css } from '@emotion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

import terminalData from '../../constants/terminal.json';

import useSearchQueryStore from '../../stores/useSearchQueryStore';
import LanguageSwitchButton from '../../common/components/LanguageSwitchButton';

function BookmarkList() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '0 20px', marginTop: '48px' }}>
      <Typography variant="body1" as="p">
        즐겨찾기
      </Typography>
      <Input
        value="서울 경부 → 구미"
        onClick={() => {
          navigate({ to: '/booking/tickets' });
        }}
        style={{ cursor: 'pointer' }}
        readOnly
      />
    </div>
  );
}

function BookingPage() {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearchQueryStore();
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [roundTrip, setRoundTrip] = useState<boolean>(false);

  console.log(searchQuery);

  const isSearchable = () => {
    return searchQuery.startId !== '' && searchQuery.destId !== '';
  };

  const initialDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayNames[today.getDay()];

    return `${month}. ${date} (${day})`;
  };

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = dayNames[date.getDay()];

    return `${month}. ${day} (${weekday})`;
  };

  const tmnCdToTmnNm = (tmnCd: string | number) => {
    const terminal = terminalData.response.body.items.item.find(
      (terminal) => terminal.tmnCd.toString() === tmnCd.toString()
    );
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
        rightSlot={<LanguageSwitchButton language="English" />}
      />

      <div
        css={css`
          text-align: center;
          margin: 24px 0;
        `}
      >
        <Typography variant="title1" as="p">
          어디로 갈까요?
        </Typography>
      </div>

      <main css={mainContent}>
        <div css={locationInputsWrapper}>
          <Input
            type="text"
            placeholder="출발지 선택"
            value={tmnCdToTmnNm(searchQuery.startId)}
            onValueChange={(value: string) => {
              setSearchQuery({
                startId: value,
              });
            }}
            onClick={() => {
              navigate({ to: '/booking/departLocation' });
            }}
            style={{ cursor: 'pointer' }}
            readOnly
          />

          <div css={transferButtonWrapper}>
            <TransferBtn
              onClick={() => {
                setSearchQuery({
                  startId: searchQuery.destId,
                  destId: searchQuery.startId,
                });
              }}
            />
          </div>

          <Input
            type="text"
            placeholder="도착지 선택"
            value={tmnCdToTmnNm(searchQuery.destId)}
            onValueChange={(value: string) => {
              setSearchQuery({
                destId: value,
              });
            }}
            onClick={() => {
              navigate({ to: '/booking/arrivalLocation' });
            }}
            style={{ cursor: 'pointer' }}
            readOnly
          />
        </div>

        <div css={dateSelector}>
          <Input
            css={dateBox}
            initialValue={initialDate()}
            value={formatDate(searchQuery.startDate)}
            onValueChange={(value: Date) => {
              setSearchQuery({
                startDate: value,
              });
            }}
            onClick={() => {
              setShowStartDatePicker(true);
            }}
            style={{ cursor: 'pointer' }}
            readOnly
          />
          <Input
            css={dateBox}
            placeholder="+왕복 선택"
            value={roundTrip ? formatDate(searchQuery.destDate) : ''}
            onClick={() => {
              setShowEndDatePicker(true);
            }}
            style={{ cursor: 'pointer' }}
            readOnly
          />
        </div>

        <div css={searchButton}>
          <MainButton
            children="조회하기"
            disabled={!isSearchable()}
            onClick={() => {
              if (isSearchable()) {
                navigate({ to: '/booking/tickets' });
              }
            }}
          />
        </div>
      </main>
      <BookmarkList />

      <div css={bottomBarWrapper}>
        <BottomBar
          leftSlot={
            <Button
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
      </div>

      {showStartDatePicker && (
        <div css={DatePickerWrapper}>
          <DatePicker
            selected={searchQuery.startDate}
            onChange={(date: Date) => {
              setSearchQuery({ startDate: date });
              setShowStartDatePicker(false);
            }}
            maxDate={searchQuery.destDate}
            locale={ko}
            formatWeekday={(nameofDay: string) => {
              return nameofDay.substring(0, 1);
            }}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  gap: '10px',
                  fontSize: theme.fontSize.body3,
                  lineHeight: theme.lineHeight.body3,
                  fontWeight: theme.fontWeight.body3,
                }}
              >
                <LeftArrowMonthIcon onClick={decreaseMonth} />
                <span>
                  {`${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`}
                </span>
                <RightArrowMonthIcon onClick={increaseMonth} />
              </div>
            )}
            inline
          />
        </div>
      )}

      {showEndDatePicker && (
        <div css={DatePickerWrapper}>
          <DatePicker
            selected={searchQuery.destDate}
            onChange={(date: Date) => {
              setSearchQuery({ destDate: date });
              setShowEndDatePicker(false);
              setRoundTrip(true);
            }}
            minDate={searchQuery.startDate}
            locale={ko}
            formatWeekday={(nameofDay: string) => {
              return nameofDay.substring(0, 1);
            }}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  gap: '10px',
                  fontSize: theme.fontSize.body3,
                  lineHeight: theme.lineHeight.body3,
                  fontWeight: theme.fontWeight.body3,
                }}
              >
                <LeftArrowMonthIcon onClick={decreaseMonth} />
                <span>
                  {`${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`}
                </span>
                <RightArrowMonthIcon onClick={increaseMonth} />
              </div>
            )}
            inline
          />
        </div>
      )}
    </div>
  );
}

export default BookingPage;
