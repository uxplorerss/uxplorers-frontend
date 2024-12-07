import React from 'react';
import Flex from '../../common/components/Flex';
import { Typography } from '../../common/components';
import PrimaryCard from '../../common/components/PrimaryCard';
import RouteRow from '../../common/components/RouteRow';
import SeatDetailsTable from '../../common/components/SeatDetailsTable';
import FeeSumRow from '../../common/components/FeeSumRow';
import useTicketListStore from '../../stores/useTicketListStore';
import StickyFooter from '../../common/components/StickyFooter';
import MainButton from '../../common/components/MainButton';
import ActionBar from '../../common/components/ActionBar';
import { css, useTheme } from '@emotion/react';

export default function BookingPaymentPage() {
  const ticketList = useTicketListStore((state) => state.ticketList);
  const theme = useTheme();

  return (
    <div>
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
      {ticketList.map(({ ...props }) => {
        return (
          <PrimaryCard
            {...props}
            headerSlot={
              <RouteRow {...props} startName="부산해운대" destName="동서울" />
            }
            bodySlot={<SeatDetailsTable {...props} />}
            footerSlot={<FeeSumRow totalFee={12345} />}
          />
        );
      })}
      <StickyFooter>
        <ActionBar
          actionSlot={
            <MainButton>
              <Flex gap="20px">
                <span>30,200원 결제하기</span>
                <Flex
                  cx={css({
                    borderRadius: theme.radii.circle,
                    width: '27px',
                    height: '27px',
                    backgroundColor: theme.colors.gray.white,
                    color: theme.colors.gray.black,
                  })}
                >
                  <Typography variant="body3">3</Typography>
                </Flex>
              </Flex>
            </MainButton>
          }
        />
      </StickyFooter>
    </div>
  );
}
