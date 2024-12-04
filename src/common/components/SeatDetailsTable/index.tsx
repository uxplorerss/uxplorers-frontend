import React from 'react';
import Typography from '../Typography';
import { Divider } from '../Divider';
import Flex from '../Flex';
import { useTheme } from '@emotion/react';
import Button from '../Button';
import SeatIcon from '../../../assets/SeatIcon.svg?react';
import SmallPersonIcon from '../../../assets/SmallPersonIcon.svg?react';
import { SeatDetailsTablePropsType } from './index.types';
import { Fee, Seat } from '../../../types';

const checkHasStops = (destIds: string[]) => !destIds.length;
const filterSeatsByType = (seats: Seat[], targetType: keyof Fee) =>
  seats.filter(({ type }) => type === targetType);

export default function SeatDetailsTable({
  company,
  destId,
  seats,
}: SeatDetailsTablePropsType) {
  const hasStops = checkHasStops(destId);
  const [adultSeats, childrenSeats] = [
    filterSeatsByType(seats, 'adults'),
    filterSeatsByType(seats, 'children'),
  ];

  const theme = useTheme();
  return (
    <Flex
      direction="column"
      justify="start"
      align="start"
      width="100%"
      gap="17px"
      cx={{
        padding: '17px',
      }}
      boxSizing="border-box"
    >
      <Flex justify="space-between" width="100%" boxSizing="border-box">
        <Flex direction="row" justify="start" gap="8px">
          <Typography
            variant="body3"
            as="div"
            cx={{
              padding: '3.5px 8px',
              backgroundColor: theme.colors.gray[3],
              color: theme.colors.gray[4],
              borderRadius: '9px',
            }}
          >
            {hasStops ? '무정차' : '경유'}
          </Typography>

          <Typography
            variant="title4"
            cx={{
              color: theme.colors.gray.black,
            }}
          >
            {company}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            variant="body3"
            cx={{
              color: theme.colors.gray[0],
            }}
          >
            우등
          </Typography>
        </Flex>
        <Button cx={{ color: theme.colors.primary.base }}>
          <Typography variant="title4">수정</Typography>
        </Button>
      </Flex>
      <div
        css={{
          display: 'grid',
          gridTemplateAreas: `"seat-icon seat-label seat-value ."
          "person-icon person-label person-value ."
          ". . adult-label adult-price"
          ". . child-label child-price"
          `,
          rowGap: '6px',
          width: '100%',
          gridTemplateColumns: 'repeat(3, auto) 1fr',
          alignItems: 'center',
        }}
      >
        <SeatIcon
          css={{
            gridArea: 'seat-icon',
          }}
        />
        <Typography
          variant="body3"
          as="div"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'seat-label',
            marginLeft: '5px',
            marginRight: '22px',
          }}
        >
          좌석
        </Typography>

        <Typography
          variant="title4"
          cx={{
            gridArea: 'seat-value',
          }}
        >
          {seats.length}
        </Typography>

        <SmallPersonIcon
          css={{
            gridArea: 'person-icon',
          }}
        />

        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'person-label',
            marginLeft: '5px',
            marginRight: '22px',
          }}
        >
          매수
        </Typography>

        <Typography
          variant="title4"
          cx={{
            gridArea: 'person-value',
          }}
        >
          총 {seats.length}장
        </Typography>
        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'adult-label',
          }}
        >
          일반 {adultSeats.length}명
        </Typography>
        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'adult-price',
            justifySelf: 'end',
          }}
        >
          {adultSeats.length * adultSeats[0].fee}원
        </Typography>
        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'child-label',
          }}
        >
          초등생 {childrenSeats.length}명
        </Typography>
        <Typography
          variant="body3"
          cx={{
            color: theme.colors.gray[4],
            gridArea: 'child-price',
            justifySelf: 'end',
          }}
        >
          {childrenSeats.length * childrenSeats[0].fee}원
        </Typography>
      </div>
    </Flex>
  );
}