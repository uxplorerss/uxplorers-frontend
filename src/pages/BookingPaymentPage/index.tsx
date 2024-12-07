import useTicketListStore from '../../stores/useTicketListStore';
import { css, useTheme } from '@emotion/react';
import Flex from '../../common/components/Flex';
import { Typography } from '../../common/components';
import PrimaryCard from '../../common/components/PrimaryCard';
import RouteOptionRow from '../../common/components/RouteOptionRow';
import SeatDetailsTable from '../../common/components/SeatDetailsTable';
import StickyFooter from '../../common/components/StickyFooter';
import ActionBar from '../../common/components/ActionBar';
import MainButton from '../../common/components/MainButton';
import { getLocaleStringNumber } from '../../lib';
import { calculateTicketListFee } from '../../lib/tickets';
import { getTerminalName } from '../../lib/terminal';
import ViewportContainer from '../../common/components/ViewportContainer';
import ContentSection from '../../common/components/ContentSection';
import CouponAndMileageCard from '../../common/components/payment/CouponAndMileageCard';
import PaymentMethodCard from '../../common/components/payment/PaymentMethodCard';

export default function BookingPaymentPage() {
  const ticketList = useTicketListStore((state) => state.ticketList);
  const itineraries = ticketList.map(({ startId, destIdList }) => {
    return {
      startName: getTerminalName(startId)!,
      destName: getTerminalName(destIdList[destIdList.length - 1])!,
    };
  });

  const theme = useTheme();

  return (
    <ViewportContainer>
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
    </ViewportContainer>
  );
}
