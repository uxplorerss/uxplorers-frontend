import Flex from '../../common/components/Flex';
import { Typography } from '../../common/components';
import PrimaryCard from '../../common/components/PrimaryCard';
import RouteOptionRow from '../../common/components/RouteOptionRow';
import SeatDetailsTable from '../../common/components/SeatDetailsTable';
import useTicketListStore from '../../stores/useTicketListStore';
import StickyFooter from '../../common/components/StickyFooter';
import MainButton from '../../common/components/MainButton';
import ActionBar from '../../common/components/ActionBar';
import { css, useTheme } from '@emotion/react';

import { calculateTicketListFee } from '../../lib/tickets';
import { getLocaleStringNumber } from '../../lib';
import { getTerminalName } from '../../lib/terminal';
import ContentSection from '../../common/components/ContentSection';

export default function BookingConfirmationPage() {
  const ticketList = useTicketListStore((state) => state.ticketList);
  const itineraries = ticketList.map(({ startId, destIdList }) => {
    return {
      startName: getTerminalName(startId)!,
      destName: getTerminalName(destIdList[destIdList.length - 1])!,
    };
  });

  const theme = useTheme();

  return (
    <div>
      <ContentSection>
        <Flex
          justify="center"
          align="center"
          cx={{
            padding: '48px 20px 20px 20px',
          }}
          direction="column"
        >
          <Typography variant="title1">예매할 내역을 확인하세요</Typography>
        </Flex>

        {ticketList.map(({ ...props }, index) => {
          return (
            <PrimaryCard
              {...props}
              headerSlot={
                <RouteOptionRow
                  {...props}
                  startName={itineraries[index].startName}
                  destName={itineraries[index].destName}
                />
              }
              children={<SeatDetailsTable {...props} />}
            />
          );
        })}
      </ContentSection>
      <StickyFooter>
        <ActionBar
          actionSlot={
            <MainButton>
              <Flex gap="20px">
                <span>
                  {getLocaleStringNumber(calculateTicketListFee(ticketList))}원
                  결제하기
                </span>
                <Flex
                  cx={css({
                    borderRadius: theme.radii.circle,
                    width: '27px',
                    height: '27px',
                    backgroundColor: theme.colors.gray.white,
                    color: theme.colors.gray.black,
                  })}
                >
                  <Typography variant="body3">{ticketList.length}</Typography>
                </Flex>
              </Flex>
            </MainButton>
          }
        />
      </StickyFooter>
    </div>
  );
}
