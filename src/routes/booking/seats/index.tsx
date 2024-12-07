import {
  createFileRoute,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import TopBar from '../../../common/components/TopBar';
import { useEffect, useState } from 'react';

import {
  seat,
  SeatTypeVariant,
} from '../../../common/components/Seats/SelectSeat/types';
import { SelectSeat } from '../../../common/components/Seats/SelectSeat';
import Flex from '../../../common/components/Flex';
import SeatType from '../../../common/components/Seats/SeatType';
import ReaminSeat from '../../../common/components/Seats/RemainSeat';
import SeatsPayInfo from '../../../common/components/Seats/SeatsPayInfo';
import useSearchQueryStore from '../../../stores/useSearchQueryStore';
import useReservationStore from '../../../stores/useReservationStore';
import { Seat } from '../../../types';
import { Button } from '../../../common/components';

import CloseIcon from '../../../assets/CloseIcon.svg?react';

export const Route = createFileRoute('/booking/seats/')({
  component: IndexComponent,
});

function IndexComponent() {
  //TODO : query param 받아오기
  const param: { direction: 'out' | 'in' } = Route.useSearch();
  const query = param.direction;

  const handleSelectSeat = (num: number) => {
    const now = seats.find((seat) => seat.id === num);
    if (now !== undefined) {
      if (now.status === 'SELECTED') {
        now.status = 'NORMAL';
        now.type = undefined;
      } else {
        now.status = 'SELECTED';
        now.type = selectedType;
      }
    }
    setSeats([...seats]);
  };

  const handleSelectType = (type: SeatTypeVariant) => {
    setSelectedType(type);
  };

  const handleNavigate = () => {
    const tmp: Seat[] = [];
    seats
      .filter((value) => value.status === 'SELECTED')
      .forEach((v) => {
        let f: number | undefined = 0;
        if (query === 'in') {
          switch (v.type) {
            case 'adults':
              f = selectedInboundBus?.fee.adults;
              break;
            case 'children':
              f = selectedInboundBus?.fee.children;
              break;
            case 'teens':
              f = selectedInboundBus?.fee.teens;
              break;
          }
        } else {
          switch (v.type) {
            case 'adults':
              f = selectedOutboundBus?.fee.adults;
              break;
            case 'children':
              f = selectedOutboundBus?.fee.children;
              break;
            case 'teens':
              f = selectedOutboundBus?.fee.teens;
              break;
          }
        }
        tmp.push({
          seatNum: v.id!,
          type: v.type!,
          fee: f!, //이 부분 단순히 그냥 하드코딩을 해야할까요? Bus 별로 어른 / 아이 / 초등학생 요금을 받아올 수 있을 지
        });
      });
    if (query === 'in') {
      selectInboundSeatList(tmp);
    } else {
      selectOutboundSeatList(tmp);
    }
    if (pageType || query === 'in') {
      navigate({ to: '/booking/bookingConfirmation' });
    } else {
      navigate({ to: '/booking/tickets/inbound' });
    }
  };

  const initSeats = () => {
    const tmp: seat[] = [];
    const originSeat: Seat[] | undefined =
      query === 'in' ? selectedInboundBus?.seats : selectedOutboundBus?.seats;

    seatMap.forEach((value) => {
      if (value !== -1) {
        //true 이면 OCCUPIED, false면 NORMAL
        let flag = false;
        originSeat?.forEach((idx) => {
          if (idx.seatNum === value) {
            flag = true;
            return false; //break 역할
          }
        });
        tmp.push({ id: value, status: flag ? 'OCCUPIED' : 'NORMAL' });
      } else {
        tmp.push({ id: value, status: 'NONE' });
      }
    });
    setSeats(tmp);
  };

  useEffect(() => {
    initSeats();
  }, []);

  const seatMap: (number | undefined)[] = [
    1, 2, -1, 3, 4, 5, -1, 6, 7, 8, -1, 9, 10, 11, -1, 12, 13, 14, -1, 15, 16,
    17, -1, 18, 19, 20, -1, 21, 22, 23, -1, 24, 25, 26, 27, 28,
  ];

  const [selectedType, setSelectedType] = useState<SeatTypeVariant>('adults');
  const [seats, setSeats] = useState<seat[]>([]);
  const { searchQuery } = useSearchQueryStore();
  const {
    selectInboundSeatList,
    selectOutboundSeatList,
    selectedInboundBus,
    selectedOutboundBus,
  } = useReservationStore();

  const navigate = useNavigate();
  const pageType = !searchQuery.destDate; // true면 예약확인페이지, false면 오는 길 버스 리스트 페이지
  const available =
    28 - seats.filter((value) => value.status === 'SELECTED').length;

  return (
    <>
      <TopBar
        leftSlot={
          <Button
            onClick={(e) => {
              e.preventDefault();
              history.go(-1);
            }}
          >
            <CloseIcon />
          </Button>
        }
      />
      <Flex children={<ReaminSeat num={available} />}></Flex>
      <Flex
        direction={'column'}
        children={<SeatType onSelectType={handleSelectType} />}
      ></Flex>
      <SelectSeat
        seats={seats}
        onSelectSeat={handleSelectSeat}
        selectedType={selectedType}
      />
      {query === 'in' ? (
        <SeatsPayInfo
          busFee={selectedInboundBus?.fee}
          seats={seats}
          pageType={pageType}
          onClick={handleNavigate}
        />
      ) : (
        <SeatsPayInfo
          busFee={selectedOutboundBus?.fee}
          seats={seats}
          pageType={pageType}
          onClick={handleNavigate}
        />
      )}
    </>
  );
}
