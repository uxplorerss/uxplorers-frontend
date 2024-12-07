import { createFileRoute, Link } from '@tanstack/react-router';
import { TopBar, Typography } from '../../../common/components';
import { css, Theme, useTheme } from '@emotion/react';
import LeftArrowIcon from '../../../assets/LeftArrowIcon.svg';
import FavIcon from '../../../assets/FavoriteStarIcon.svg';
import SelectedFavIcon from '../../../assets/FavoriteStarIcon-selected.svg';
import { useEffect, useState } from 'react';
import { getBusTicketsAPI } from '../../../apis/getBusTickets';
import useSearchQueryStore from '../../../stores/useSearchQueryStore';
import {
  convertAMPMHHMM,
  convertMMDDday,
  convertYYYYMMDD,
} from '../../../utils/convertDate';
import { searchTerminalNameToCode } from '../../../utils/searchTerminalInfo';
import useForwardBusListStore from '../../../stores/useTowardBusListStore';
import MOCK_busTickets from '../../../constants/mock/bus_ticket_seoul_daejeon.json';
import { convertBusTicketsToBusList } from '../../../utils/convertBusTicketsToBusList';
import StikcyHeader from '../../../common/components/StickyHeader';
import useFavoriteRouteStore from '../../../stores/useFavoriteRouteStore';
import ButtonComponent from '../../../pages/tickets/ticketListButton/TicketListButton';
import Select from 'react-select';
import ErrorComponent from '../../../pages/error';

export const Route = createFileRoute('/booking/tickets/')({
  component: RouteComponent,
});

export const container = (theme: Theme) => css`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${theme.colors.gray[3]};
`;

export default function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  // const [busTickets, setBusTickets] = useState<BusTicket[]>([]);
  const theme = useTheme();
  const { searchQuery } = useSearchQueryStore((state) => state);
  const { forwardBusList, concat } = useForwardBusListStore();
  const { favoriteRouteList, addRoute, deleteRoute } = useFavoriteRouteStore();

  const [busSearchTime, setBusSearchTime] = useState<{
    value: Date;
    label: string;
  }>({
    value: new Date(searchQuery.startDate),
    label: `${convertAMPMHHMM(new Date(searchQuery.startDate))} 이후`,
  });
  const [busSearchOption, setBusSearchOption] = useState<{
    value: string;
    label: string;
  }>({ value: '전체', label: '전체' });

  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const date = new Date(searchQuery.startDate);
    date.setHours(i, 0, 0, 0);
    return {
      value: date,
      label: `${convertAMPMHHMM(date)} 이후`,
    };
  });

  const options = [
    { value: '전체', label: '전체' },
    { value: '무정차', label: '무정차' },
    { value: '경유', label: '경유' },
    { value: '고속', label: '고속' },
    { value: '우등', label: '우등' },
    { value: '심야', label: '심야' },
  ];

  const handleFavoriteRoute = () => {
    if (
      favoriteRouteList.some(
        (route) =>
          route.startId === searchQuery.startId &&
          route.destId === searchQuery.destId
      )
    ) {
      deleteRoute({ startId: searchQuery.startId, destId: searchQuery.destId });
    } else {
      addRoute({ startId: searchQuery.startId, destId: searchQuery.destId });
    }
  };

  useEffect(() => {
    getBusTicketsAPI(
      searchQuery.startId,
      searchQuery.destId,
      convertYYYYMMDD(new Date(searchQuery.startDate))
    )
      .then((data) => {
        // TODO: 전역 상태에 넣기
        if (!data.response.body.items.item) {
          concat([]);
          return;
        }
        concat(
          convertBusTicketsToBusList(data.response.body.items.item, searchQuery)
        );
      })
      .catch((error) => {
        console.error(error);
        //error인 경우, mock data로 초기화
        concat(
          convertBusTicketsToBusList(
            MOCK_busTickets.response.body.items.item,
            searchQuery
          )
        );
      });
  }, []);

  return (
    <div style={{ userSelect: 'none' }}>
      <StikcyHeader>
        <TopBar
          leftSlot={
            <Link
              onClick={(e) => {
                e.preventDefault();
                history.go(-1);
              }}
            >
              <img src={LeftArrowIcon} alt="back button" />
            </Link>
          }
          centerSlot={
            <div>
              <div>
                {searchTerminalNameToCode(searchQuery.startId) ?? '동서울'} →{' '}
                {searchTerminalNameToCode(searchQuery.destId) ?? '대전복합'}
              </div>
              <div>{convertMMDDday(new Date(searchQuery.startDate))}</div>
            </div>
          }
          rightSlot={
            <img
              style={{ cursor: 'pointer' }}
              onClick={handleFavoriteRoute}
              src={
                favoriteRouteList.some(
                  (route) =>
                    route.startId === searchQuery.startId &&
                    route.destId === searchQuery.destId
                )
                  ? SelectedFavIcon
                  : FavIcon
              }
              alt="favorite"
            />
          }
        />
      </StikcyHeader>

      <section css={(theme) => container(theme)}>
        <Typography variant="title1" as="p" cx={{ textAlign: 'center' }}>
          <div>
            가는 길 <br></br> 버스를 선택하세요
          </div>
        </Typography>

        <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
          <Select
            placeholder="시간 선택"
            value={busSearchTime}
            onChange={(newValue) =>
              setBusSearchTime(newValue as { value: Date; label: string })
            }
            options={timeOptions}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: theme.colors.gray[2],
                borderColor: state.isFocused
                  ? theme.colors.primary.base
                  : theme.colors.gray[2],
                borderRadius: '20px',
                minWidth: '100px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused
                  ? theme.colors.primary.base
                  : theme.colors.gray[2],
                color: state.isFocused
                  ? theme.colors.gray.white
                  : theme.colors.gray[4],
              }),
            }}
          />

          <Select
            placeholder="검색조건"
            value={busSearchOption}
            onChange={(newValue) =>
              setBusSearchOption(newValue as { value: string; label: string })
            }
            options={options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: theme.colors.gray[2],
                borderColor: state.isFocused
                  ? theme.colors.primary.base
                  : theme.colors.gray[2],
                borderRadius: '20px',
                minWidth: '100px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused
                  ? theme.colors.primary.base
                  : theme.colors.gray[2],
                color: state.isFocused
                  ? theme.colors.gray.white
                  : theme.colors.gray[4],
              }),
            }}
          />
        </div>

        {forwardBusList &&
          forwardBusList
            .filter(
              (bus) =>
                bus.startDate >= busSearchTime.value &&
                (busSearchOption.value === '전체' ||
                  busSearchOption.value === '무정차' ||
                  bus.class.includes(busSearchOption.value))
            )
            .map((bus, index) => (
              <ButtonComponent key={index} bus={bus} direction="outbound" />
            ))}
      </section>

      {forwardBusList && forwardBusList.length === 0 ? (
        <ErrorComponent needRebooking={true} />
      ) : (
        forwardBusList.filter(
          (bus) =>
            bus.startDate >= busSearchTime.value &&
            (busSearchOption.value === '전체' ||
              busSearchOption.value === '무정차' ||
              bus.class.includes(busSearchOption.value))
        ).length === 0 && <ErrorComponent needRebooking={false} />
      )}
    </div>
  );
}
