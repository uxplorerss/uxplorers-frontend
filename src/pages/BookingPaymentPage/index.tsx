import useTicketListStore from '../../stores/useTicketListStore';
import { css, useTheme } from '@emotion/react';
import Flex from '../../common/components/Flex';
import { Button, TopBar, Typography } from '../../common/components';
import PrimaryCard from '../../common/components/PrimaryCard';
import RouteOptionRow from '../../common/components/RouteOptionRow';
import SeatDetailsTable from '../../common/components/SeatDetailsTable';
import StickyFooter from '../../common/components/StickyFooter';
import ActionBar from '../../common/components/ActionBar';
import MainButton from '../../common/components/MainButton';

import { calculateTicketListFee } from '../../lib/tickets';
import { getTerminalName } from '../../lib/terminal';
import ViewportContainer from '../../common/components/ViewportContainer';
import ContentSection from '../../common/components/ContentSection';
import CouponAndMileageCard from '../../common/components/payment/CouponAndMileageCard';
import PaymentMethodCard from '../../common/components/payment/PaymentMethodCard';
import { useNavigate } from '@tanstack/react-router';
import { useShallow } from 'zustand/shallow';
import useReservationStore from '../../stores/useReservationStore';
import StikcyHeader from '../../common/components/StickyHeader';
import LeftArrowIcon from '../../assets/LeftArrowIcon.svg?react';

export default function BookingPaymentPage() {
  const { ticketList, purchaseTicketList } = useReservationStore(
    useShallow((state) => ({
      ticketList: state.pendingTicketList,
      purchaseTicketList: state.purchaseTicketList,
    }))
  );
  const itineraries = ticketList.map(({ startId, destIdList }) => {
    return {
      startName: getTerminalName(startId)!,
      destName: getTerminalName(destIdList[destIdList.length - 1])!,
    };
  });

  const theme = useTheme();

  const navigate = useNavigate();

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
          centerSlot={
            <Typography variant="body2" cx={{ fontSize: '1.125rem' }}>
              결제하기
            </Typography>
          }
        />
      </StikcyHeader>
      <ContentSection>
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
          <CouponAndMileageCard />
          <PaymentMethodCard />
        </Flex>
      </ContentSection>
      <StickyFooter>
        <ActionBar
          actionSlot={
            <MainButton
              onClick={() => {
                purchaseTicketList();
                navigate({
                  to: '/booking/paymentConfirmation',
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
