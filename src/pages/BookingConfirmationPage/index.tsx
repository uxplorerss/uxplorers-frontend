import Flex from '../../common/components/Flex';
import { Button, TopBar, Typography } from '../../common/components';
import PrimaryCard from '../../common/components/PrimaryCard';
import RouteOptionRow from '../../common/components/RouteOptionRow';
import SeatDetailsTable from '../../common/components/SeatDetailsTable';
import StickyFooter from '../../common/components/StickyFooter';
import MainButton from '../../common/components/MainButton';
import ActionBar from '../../common/components/ActionBar';
import { css, useTheme } from '@emotion/react';

import { calculateTicketListFee } from '../../lib/tickets';
import { getTerminalName } from '../../lib/terminal';
import ContentSection from '../../common/components/ContentSection';
import useReservationStore from '../../stores/useReservationStore';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { useShallow } from 'zustand/shallow';
import { Ticket } from '../../types';
import ViewportContainer from '../../common/components/ViewportContainer';
import LeftArrowIcon from '../../assets/LeftArrowIcon.svg?react';
import StikcyHeader from '../../common/components/StickyHeader';

export default function BookingConfirmationPage() {
  const {
    inboundBus,
    outboundBus,
    inboundSeatList,
    outboundSeatList,
    issueTicketList,
  } = useReservationStore(
    useShallow((state) => ({
      inboundBus: state.selectedInboundBus,
      outboundBus: state.selectedOutboundBus!,
      inboundSeatList: state.selectedInboundSeatList,
      outboundSeatList: state.selectedOutboundSeatList,
      issueTicketList: state.issueTicketList,
    }))
  );

  const theme = useTheme();

  const navigate = useNavigate();

  const { history } = useRouter();

  if (!outboundBus) {
    return <>비어있습니다.</>;
  }

  const outboundTicket: Ticket = {
    ...outboundBus,
    seats: outboundSeatList,
  };

  const inboundTicket: Ticket | null | undefined = inboundBus && {
    ...inboundBus,
    seats: inboundSeatList,
  };

  const ticketList = [outboundTicket].concat(inboundTicket ?? []);

  const itineraries = ticketList.map(({ startId, destIdList }) => {
    return {
      startName: getTerminalName(startId)!,
      destName: getTerminalName(destIdList[destIdList.length - 1])!,
    };
  });

  if (!outboundBus) {
    <>로딩중입니다.</>;
  }

  return (
    <ViewportContainer>
      <StikcyHeader>
        <TopBar
          leftSlot={
            <Button
              onClick={() => {
                history.back();
              }}
            >
              <LeftArrowIcon />
            </Button>
          }
        />
      </StikcyHeader>
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
        <Flex direction="column" gap="17px">
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
        </Flex>
      </ContentSection>
      <StickyFooter>
        <ActionBar
          actionSlot={
            <MainButton
              onClick={() => {
                issueTicketList();
                navigate({
                  to: '/booking/payment',
                });
              }}
            >
              <Flex gap="20px">
                <span>
                  {calculateTicketListFee(ticketList).toLocaleString()}원
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
    </ViewportContainer>
  );
}
