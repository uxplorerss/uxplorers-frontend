import { createFileRoute, Link } from '@tanstack/react-router';
import { Button, TopBar, Typography } from '../../../common/components';
import { css, Theme } from '@emotion/react';
import LeftArrowIcon from '../../../assets/LeftArrowIcon.svg';
import FavIcon from '../../../assets/FavoriteStarIcon.svg';
import { useEffect, useState } from 'react';
import {
  BusTicket,
  getBusNowTimeAPI,
  getBusTicketsAPI,
} from '../../../apis/getBusTickets';
import useSearchQueryStore from '../../../stores/useSearchQueryStore';
import {
  convertAMPMHHMM,
  convertMinutesToHHMM,
  convertMMDDday,
  convertYYYYMMDD,
} from '../../../utils/convertDate';
import { searchTerminalNameToCode } from '../../../utils/searchTerminalInfo';
import useForwardBusListStore from '../../../stores/useTowardBusListStore';

const container = (theme: Theme) => css`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${theme.colors.gray[3]};
`;

export const Route = createFileRoute('/booking/tickets/')({
  component: RouteComponent,
});

const buttonCSS = (theme: Theme) => css`
  background-color: ${theme.colors.gray.white};
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .charge-time__container {
    text-align: left;
    .charge {
    }

    .time {
    }
  }

  .busInfo {
    text-align: right;
  }
`;

function ButtonComponent({ busTicket }: { busTicket: BusTicket }) {
  return (
    <Button cx={(theme) => buttonCSS(theme)}>
      <Typography variant="title3">
        {convertAMPMHHMM(busTicket.depPlandTime)}
      </Typography>
      <div className="charge-time__container">
        <span>무정차</span>
        <span>경기고속</span>
        <Typography variant="title3" as="div">
          {busTicket.charge.toLocaleString()} 원
        </Typography>
        <Typography
          variant="body4"
          cx={(theme) => css`
            color: ${theme.colors.gray[4]};
          `}
        >
          {convertMinutesToHHMM(
            busTicket.arrPlandTime - busTicket.depPlandTime
          )}{' '}
          예상
        </Typography>
      </div>
      <div className="busInfo">
        <Typography variant="title3" as="div">
          좌석 수
        </Typography>
        <Typography
          variant="body4"
          cx={(theme) => css`
            color: ${theme.colors.primary.base};
          `}
        >
          {busTicket.gradeNm}
        </Typography>
        <div>info_btn</div>
      </div>
    </Button>
  );
}

function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  const [busTickets, setBusTickets] = useState<BusTicket[]>([]);
  const [busSearchTime, setBusSearchTime] = useState<number>(202411290500);

  const { searchQuery } = useSearchQueryStore((state) => state);
  const { forwardBusList, concat } = useForwardBusListStore((state) => state);

  useEffect(() => {
    getBusTicketsAPI(
      searchQuery.startId || 'NAEK032',
      searchQuery.destId || 'NAEK300',
      convertYYYYMMDD(searchQuery.startDate)
    )
      .then((data) => {
        setBusTickets(data.response.body.items.item);

        // TODO: 전역 상태에 넣기
        //concat(data.response.body.items.item);
        // 기본 adults 요금, teens 요금은 20% 할인, children 요금은 50% 할인
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ userSelect: 'none' }}>
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
            <div>{convertMMDDday(searchQuery.startDate)}</div>
          </div>
        }
        rightSlot={<img src={FavIcon} />}
      />

      <section css={(theme) => container(theme)}>
        <Typography variant="title1" as="p" cx={{ textAlign: 'center' }}>
          버스를 선택하세요
        </Typography>

        <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
          <button>{convertAMPMHHMM(busSearchTime)} 이후</button>
          <button>검색조건</button>
        </div>

        {busTickets &&
          busTickets.map((busTicket, index) => (
            <ButtonComponent key={index} busTicket={busTicket} />
          ))}
      </section>
    </div>
  );
}
