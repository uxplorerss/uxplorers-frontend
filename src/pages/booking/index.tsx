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
  topBarWrapper,
} from './index.styles';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import QRIcon from '../../assets/QRIcon.svg?react';
import TicketIcon from '../../assets/TicketIcon.svg?react';
import PersonIcon from '../../assets/PersonIcon.svg?react';
import TransferBtn from '../../assets/booking/btn_transfer.svg?react';
import LeftArrowMonthIcon from '../../assets/booking/btn_leftArrowMonth.svg?react';
import RightArrowMonthIcon from '../../assets/booking/btn_rightArrowMonth.svg?react';
import CloseIcon from '../../assets/CloseIcon.svg?react';

import { buildTypography } from '../../common/components/Typography/index.styles';
import { container as buttonContainer } from '../../common/components/Button/index.styles';
import { css, useTheme } from '@emotion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

import terminalData from '../../constants/terminal.json';

import useSearchQueryStore from '../../stores/useSearchQueryStore';
import LanguageSwitchButton from '../../common/components/LanguageSwitchButton';
import { buildInput } from '../../common/components/Input/index.styles';
import useFavoriteRouteStore from '../../stores/useFavoriteRouteStore';

const tmnCdToTmnNm = (tmnCd: string | number) => {
  const terminal = terminalData.response.body.items.item.find(
    (terminal) => terminal.tmnCd.toString() === tmnCd.toString()
  );
  return terminal?.tmnNm;
};

function BookmarkList() {
  const navigate = useNavigate();
  const theme = useTheme();

  const { favoriteRouteList } = useFavoriteRouteStore();
  const { setSearchQuery } = useSearchQueryStore();

  return (
    <div
      css={css`
        padding: 0px 20px;
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
    >
      <Typography variant="body1" as="p">
        즐겨찾기
      </Typography>
      {favoriteRouteList.map((route, index) => (
        <Button
          key={index}
          cx={buildInput(theme)}
          onClick={() => {
            setSearchQuery({
              startId: route.startId,
              destId: route.destId,
            });
            navigate({ to: '/booking/tickets' });
          }}
          style={{ cursor: 'pointer' }}
        >
          {tmnCdToTmnNm(route.startId)} → {tmnCdToTmnNm(route.destId)}
        </Button>
      ))}
    </div>
  );
}

function BookingPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { searchQuery, setSearchQuery } = useSearchQueryStore();
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [roundTrip, setRoundTrip] = useState<boolean>(false);

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

  const formatDate = (date?: Date | null) => {
    if (!date) {
      return '';
    }
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = dayNames[date.getDay()];

    return `${month}. ${day} (${weekday})`;
  };

  return (
    <div css={container}>
      <div css={topBarWrapper}>
        <TopBar
          leftSlot={
            <Button>
              <LogoIcon />
            </Button>
          }
          rightSlot={<LanguageSwitchButton language="English" />}
        />
      </div>

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
          <Button
            css={[
              buildInput(theme),
              {
                color: searchQuery.startId
                  ? theme.colors.gray.black
                  : theme.colors.gray[1],
              },
            ]}
            onClick={() => {
              navigate({ to: '/booking/departLocation' });
            }}
          >
            {searchQuery.startId
              ? tmnCdToTmnNm(searchQuery.startId)
              : '출발지 선택'}
          </Button>

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
          <Button
            css={[
              buildInput(theme),
              {
                color: searchQuery.destId
                  ? theme.colors.gray.black
                  : theme.colors.gray[1],
              },
            ]}
            onClick={() => {
              navigate({ to: '/booking/arrivalLocation' });
            }}
          >
            {searchQuery.destId
              ? tmnCdToTmnNm(searchQuery.destId)
              : '도착지 선택'}
          </Button>
        </div>

        <div css={dateSelector}>
          <Input
            css={dateBox}
            value={formatDate(new Date(searchQuery.startDate))}
            onValueChange={(value: string) => {
              setSearchQuery({
                startDate: new Date(value),
              });
            }}
            onClick={() => {
              setShowStartDatePicker(true);
              setShowEndDatePicker(false);
            }}
            style={{ cursor: 'pointer' }}
            readOnly
          />
          <Input
            css={dateBox}
            placeholder="+왕복 선택"
            value={
              roundTrip && searchQuery.destDate
                ? formatDate(new Date(searchQuery.destDate))
                : ''
            }
            onClick={() => {
              setShowEndDatePicker(true);
              setShowStartDatePicker(false);
            }}
            style={{ cursor: 'pointer' }}
            readOnly
            onValueChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Button
            onClick={() => {
              setSearchQuery({ destDate: null });
              //setRoundTrip(false);
            }}
            cx={css`
              position: absolute;
              right: 5px;
              top: 9px;
            `}
          >
            <CloseIcon />
          </Button>
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
            selected={new Date(searchQuery.startDate)}
            onChange={(date: Date | null) => {
              if (!date) return;
              const nowDate = new Date();
              date.setHours(nowDate.getHours(), nowDate.getMinutes(), 0, 0);
              setSearchQuery({ startDate: date });
              setShowStartDatePicker(false);
            }}
            maxDate={searchQuery.destDate ?? undefined}
            locale={ko}
            formatWeekDay={(nameofDay: string) => {
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
            selected={new Date(searchQuery.destDate ?? Date.now())}
            onChange={(date: Date | null) => {
              setSearchQuery({ destDate: date });
              setShowEndDatePicker(false);
              setRoundTrip(true);
            }}
            minDate={searchQuery.startDate}
            locale={ko}
            formatWeekDay={(nameofDay: string) => {
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
