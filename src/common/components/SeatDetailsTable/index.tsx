import Typography from '../Typography';
import Flex from '../Flex';
import { useTheme } from '@emotion/react';
import SeatIcon from '../../../assets/SeatIcon.svg?react';
import SmallPersonIcon from '../../../assets/SmallPersonIcon.svg?react';
import { SeatDetailsTablePropsType } from './index.types';
import { Fee, Seat } from '../../../types';
import CompanyRow from '../CompanyRow';
import TicketDateRow from '../TicketDateRow';
import FeeSumRow from '../FeeSumRow';
import {
  buildDashedVerticalBorderStyles,
  buildGray1ChildrenStyles,
  buildGray4Styles,
  verticalPaddingStyles,
} from './index.styles';
import { calculateSeatListFee } from '../../../lib/seats';

const filterSeatsByType = (seats: Seat[], targetType: keyof Fee) =>
  seats.filter(({ type }) => type === targetType);

export default function SeatDetailsTable({
  company,
  destIdList,
  seats,
  startDate,
  inactive = false,
}: SeatDetailsTablePropsType) {
  const [adultSeats, teensSeats, childrenSeats] = [
    filterSeatsByType(seats, 'adults'),
    filterSeatsByType(seats, 'teens'),
    filterSeatsByType(seats, 'children'),
  ];

  const theme = useTheme();
  return (
    <Flex
      direction="column"
      justify="start"
      align="start"
      width="100%"
      boxSizing="border-box"
      cx={[buildGray1ChildrenStyles(theme, inactive)]}
    >
      <TicketDateRow startDate={startDate} cx={[verticalPaddingStyles]} />
      <Flex
        direction="column"
        width="100%"
        justify="start"
        align="start"
        gap="17px"
        cx={[verticalPaddingStyles, buildDashedVerticalBorderStyles]}
      >
        <CompanyRow company={company} destIdList={destIdList} />
        <div
          css={[
            {
              display: 'grid',
              gridTemplateAreas: `"seat-icon seat-label seat-value ."
          "person-icon person-label person-value ."
          ". . adult-label adult-price"
          ". . teen-label teen-price"
          ". . child-label child-price"
          
          `,
              rowGap: '6px',
              width: '100%',
              gridTemplateColumns: 'repeat(3, auto) 1fr',
              alignItems: 'center',
            },
          ]}
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
          {!!adultSeats.length && (
            <>
              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'adult-label',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                일반 {adultSeats.length}명
              </Typography>
              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'adult-price',
                    justifySelf: 'end',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                {(adultSeats.length * adultSeats[0].fee).toLocaleString()}원
              </Typography>
            </>
          )}
          {!!teensSeats.length && (
            <>
              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'teen-label',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                초등생 {teensSeats.length}명
              </Typography>

              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'teen-price',
                    justifySelf: 'end',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                {(teensSeats.length * teensSeats[0].fee).toLocaleString()}원
              </Typography>
            </>
          )}
          {!!childrenSeats.length && (
            <>
              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'child-label',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                아동 {childrenSeats.length}명
              </Typography>
              <Typography
                variant="body3"
                cx={[
                  {
                    color: theme.colors.gray[4],
                    gridArea: 'child-price',
                    justifySelf: 'end',
                  },
                  buildGray4Styles(theme, inactive),
                ]}
              >
                {(childrenSeats.length * childrenSeats[0].fee).toLocaleString()}
                원
              </Typography>
            </>
          )}
        </div>
      </Flex>
      <FeeSumRow
        totalFee={calculateSeatListFee(seats)}
        cx={verticalPaddingStyles}
      />
    </Flex>
  );
}
