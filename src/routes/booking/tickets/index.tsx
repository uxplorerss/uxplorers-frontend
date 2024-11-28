import { createFileRoute, Link } from '@tanstack/react-router';
import { Card, TopBar, Typography } from '../../../common/components';
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
import { convertYYYYMMDD } from '../../../utils/convertYYYYMMDD';

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

function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  const [busTickets, setBusTickets] = useState<BusTicket[]>([]);

  const { searchQuery } = useSearchQueryStore((state) => state);

  useEffect(() => {
    //console.log(selectTime);
    //getBusNowTimeAPI('010', '700').then((data) => console.log(data));
    getBusTicketsAPI(
      searchQuery.startId || 'NAEK032',
      searchQuery.destId || 'NAEK300',
      convertYYYYMMDD(searchQuery.startDate)
    ).then((data) => {
      // console.log(data);
      setBusTickets(data.response.body.items.item);
    });
  }, []);

  return (
    <>
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
            <div>동서울 → 부산해운대</div>
            <div>11월 27일 (수)</div>
          </div>
        }
        rightSlot={<img src={FavIcon} />}
      />

      <section css={(theme) => container(theme)}>
        <Typography variant="title1" as="p" cx={{ textAlign: 'center' }}>
          버스를 선택하세요
        </Typography>

        <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
          <button>시간: 오전 9:00 이후</button>
          <button>검색조건</button>
        </div>

        {busTickets &&
          busTickets.map((busTicket, index) => (
            <>
              <Card
                key={index}
                body={Object.values(busTicket).map((value, index) => (
                  <div key={index}>{value}</div>
                ))}
              />
            </>
          ))}
      </section>
    </>
  );
}
