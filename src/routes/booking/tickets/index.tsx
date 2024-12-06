import { createFileRoute, Link } from '@tanstack/react-router';
import { Button, TopBar, Typography } from '../../../common/components';
import { css, Theme } from '@emotion/react';
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

export const Route = createFileRoute('/booking/tickets/')({
  component: RouteComponent,
});

const container = (theme: Theme) => css`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${theme.colors.gray[3]};
`;

export default function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  // const [busTickets, setBusTickets] = useState<BusTicket[]>([]);
  const [busSearchTime, setBusSearchTime] = useState<number>(202411290500);

  const { searchQuery } = useSearchQueryStore((state) => state);
  const { forwardBusList, concat } = useForwardBusListStore();
  const { favoriteRouteList, addRoute, deleteRoute } = useFavoriteRouteStore();

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
          버스를 선택하세요
        </Typography>

        <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
          <Button>
            <Typography
              variant="body4"
              backgroundColor="gray"
              cx={(theme) => css`
                color: ${theme.colors.gray[4]};
              `}
            >
              {convertAMPMHHMM(busSearchTime)} 이후
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body4"
              backgroundColor="gray"
              cx={(theme) => css`
                color: ${theme.colors.gray[4]};
              `}
            >
              검색조건
            </Typography>
          </Button>
        </div>

        {forwardBusList &&
          forwardBusList.map((bus, index) => (
            <ButtonComponent key={index} bus={bus} direction="outbound" />
          ))}
      </section>
    </div>
  );
}
