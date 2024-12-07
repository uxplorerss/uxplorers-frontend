import * as React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { css, useTheme } from '@emotion/react';
import useSearchQueryStore from '../../../stores/useSearchQueryStore';
import useBackwardBusListStore from '../../../stores/useBackwardBusListStore';
import useFavoriteRouteStore from '../../../stores/useFavoriteRouteStore';
import {
  convertAMPMHHMM,
  convertMMDDday,
  convertYYYYMMDD,
} from '../../../utils/convertDate';
import { getBusTicketsAPI } from '../../../apis/getBusTickets';
import { convertBusTicketsToBusList } from '../../../utils/convertBusTicketsToBusList';
import MOCK_busTickets from '../../../constants/mock/bus_ticket_seoul_daejeon.json';
import StikcyHeader from '../../../common/components/StickyHeader';
import { TopBar, Typography } from '../../../common/components';
import LeftArrowIcon from '../../../assets/LeftArrowIcon.svg';
import FavIcon from '../../../assets/FavoriteStarIcon.svg';
import SelectedFavIcon from '../../../assets/FavoriteStarIcon-selected.svg';
import { searchTerminalNameToCode } from '../../../utils/searchTerminalInfo';
import { container } from '.';
import Select from 'react-select';
import ButtonComponent from '../../../pages/tickets/ticketListButton/TicketListButton';
import ErrorComponent from '../../../pages/error';

export const Route = createFileRoute('/booking/tickets/inbound')({
  component: RouteComponent,
});

export default function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  // const [busTickets, setBusTickets] = useState<BusTicket[]>([]);
  const theme = useTheme();
  const { searchQuery } = useSearchQueryStore((state) => state);

  const { backwardBusList, concat } = useBackwardBusListStore();
  const { favoriteRouteList, addRoute, deleteRoute } = useFavoriteRouteStore();

  const [busSearchTime, setBusSearchTime] = React.useState<{
    value: Date;
    label: string;
  }>({
    value: new Date(searchQuery.destDate ?? Date.now()),
    label: `${convertAMPMHHMM(new Date(searchQuery.destDate ?? Date.now()))} 이후`,
  });
  const [busSearchOption, setBusSearchOption] = React.useState<{
    value: string;
    label: string;
  }>({ value: '전체', label: '전체' });

  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const date = new Date(searchQuery.destDate ?? Date.now());
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

  React.useEffect(() => {
    getBusTicketsAPI(
      searchQuery.startId,
      searchQuery.destId,
      convertYYYYMMDD(new Date(searchQuery.destDate ?? Date.now()))
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
                {searchTerminalNameToCode(searchQuery.destId)} →{' '}
                {searchTerminalNameToCode(searchQuery.startId)}
              </div>
              <div>
                {convertMMDDday(new Date(searchQuery.destDate ?? Date.now()))}
              </div>
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
            오는 길 <br></br> 버스를 선택하세요
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

        {backwardBusList &&
          backwardBusList
            .filter(
              (bus) =>
                bus.startDate >= busSearchTime.value &&
                (busSearchOption.value === '전체' ||
                  busSearchOption.value === '무정차' ||
                  bus.class.includes(busSearchOption.value))
            )
            .map((bus, index) => (
              <ButtonComponent key={index} bus={bus} direction="inbound" />
            ))}
      </section>
      {backwardBusList.length === 0 && <ErrorComponent needRebooking={true} />}
      {backwardBusList &&
        backwardBusList.filter(
          (bus) =>
            bus.startDate >= busSearchTime.value &&
            (busSearchOption.value === '전체' ||
              busSearchOption.value === '무정차' ||
              bus.class.includes(busSearchOption.value))
        ).length === 0 && <ErrorComponent needRebooking={false} />}
    </div>
  );
}
