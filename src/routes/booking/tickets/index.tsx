import { createFileRoute, Link } from '@tanstack/react-router';
import { Button, TopBar, Typography } from '../../../common/components';
import { css, Theme } from '@emotion/react';
import LeftArrowIcon from '../../../assets/LeftArrowIcon.svg';
import FavIcon from '../../../assets/FavoriteStarIcon.svg';
import InfoIcon from '../../../assets/InfoIcon.svg?react';
import { useEffect, useState } from 'react';
import { BusTicket, getBusTicketsAPI } from '../../../apis/getBusTickets';
import useSearchQueryStore from '../../../stores/useSearchQueryStore';
import {
  convertAMPMHHMM,
  getDifferenceInMinutes,
  convertMMDDday,
  convertYYYYMMDD,
} from '../../../utils/convertDate';
import { searchTerminalNameToCode } from '../../../utils/searchTerminalInfo';
import useForwardBusListStore from '../../../stores/useTowardBusListStore';
import { Tooltip } from 'react-tooltip';
import MOCK_busTickets from '../../../constants/mock/bus_ticket_seoul_daejeon.json';
import { convertBusTicketsToBusList } from '../../../utils/convertBusTicketsToBusList';
import { Bus } from '../../../types';
import StikcyHeader from '../../../common/components/StickyHeader';

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

const buttonCSS = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.gray.white};
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .charge-time__container {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;

    .tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }

  .busInfo {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }
`;

function ButtonComponent({ bus }: { bus: Bus }) {
  return (
    <Link to="/booking/seats">
      <Button cx={(theme) => buttonCSS(theme)}>
        <Typography variant="title3">
          {convertAMPMHHMM(bus.startDate)}
        </Typography>
        <div className="charge-time__container">
          <div className="tags">
            <Typography
              variant="body3"
              cx={(theme) => css`
                color: ${theme.colors.primary.base};
              `}
              backgroundColor="primary"
            >
              무정차
            </Typography>
            <Typography
              variant="body4"
              cx={(theme) => css`
                color: ${theme.colors.gray[0]};
              `}
              as="span"
            >
              경기고속
            </Typography>
          </div>
          <Typography variant="title3" as="div">
            {bus.fee.adults.toLocaleString()} 원
          </Typography>
          <Typography
            variant="body4"
            cx={(theme) => css`
              color: ${theme.colors.gray[4]};
            `}
          >
            {bus.eta} 예상
          </Typography>
        </div>
        <div className="busInfo">
          <Typography variant="title3" as="div">
            {`${bus.seats.length || 28}석`}
          </Typography>
          <Typography
            variant="body4"
            cx={(theme) => css`
              color: ${theme.colors.primary.base};
            `}
          >
            {bus.class}
          </Typography>
          <InfoIcon
            data-tooltip-id="bus-ticket-tooltip"
            data-tooltip-content="좌석수는 부정확할 수 있습니다. 터미널에서 확인해 주세요."
            css={css`
              margin-top: 7px;
            `}
          />
          <Tooltip
            id="bus-ticket-tooltip"
            style={{ backgroundColor: 'gray' }}
          />
        </div>
      </Button>
    </Link>
  );
}

export default function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  // const [busTickets, setBusTickets] = useState<BusTicket[]>([]);
  const [busSearchTime, setBusSearchTime] = useState<number>(202411290500);

  const { searchQuery } = useSearchQueryStore((state) => state);
  const { forwardBusList, concat } = useForwardBusListStore((state) => state);

  useEffect(() => {
    getBusTicketsAPI(
      searchQuery.startId || 'NAEK032',
      searchQuery.destId || 'NAEK300',
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
          rightSlot={<img src={FavIcon} />}
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
            <ButtonComponent key={index} bus={bus} />
          ))}
      </section>
    </div>
  );
}
