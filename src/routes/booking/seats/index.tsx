import { createFileRoute } from '@tanstack/react-router';
import TopBar from '../../../common/components/TopBar';
import { useState, useEffect } from 'react';

import { seat } from '../../../common/Seats/SelectSeat/types';
import { SelectSeat } from '../../../common/Seats/SelectSeat';
import Flex from '../../../common/components/Flex';
import SeatType from '../../../common/Seats/SeatType';
import ReaminSeat from '../../../common/Seats/RemainSeat';

export const Route = createFileRoute('/booking/seats/')({
  component: IndexComponent,
});

function IndexComponent() {
  const [available, setAvailable] = useState<number>(0);
  const seatClickHandler = (num: number) => {
    const now = seats.find((seat) => seat.id === num);
    if (now !== undefined) {
      if (now.status === 'SELECTED') {
        now.status = 'NORMAL';
      } else {
        now.status = 'SELECTED';
      }
    }
    setSeats([...seats]);
  };

  //TODO GET /seats/${bus}
  const initSeats = () => {
    seatMap.forEach((value) => {
      if (value !== -1) {
        setSeats((prev) => [...prev, { id: value, status: 'NORMAL' }]);
      } else {
        setSeats((prev) => [...prev, { id: value, status: 'NONE' }]);
      }
    });
  };

  const seatMap: (number | undefined)[] = [
    1, 2, -1, 3, 4, 5, -1, 6, 7, 8, -1, 9, 10, 11, -1, 12, 13, 14, -1, 15, 16,
    17, -1, 18, 19, 20, -1, 21, 22, 23, -1, 24, 25, 26, 27, 28,
  ];

  const [seats, setSeats] = useState<seat[]>([]);

  //TODO GET /seats/${bus}
  useEffect(() => {
    setSeats([]);
    initSeats();
  }, []);

  useEffect(() => {
    setAvailable(
      seats.filter(
        (value) => value.status === 'NORMAL' || value.status === 'SELECTED'
      ).length
    );
  }, [seats]);

  return (
    <>
      <TopBar />
      <Flex children={<ReaminSeat num={available} />}></Flex>
      <Flex direction={'column'} children={<SeatType />}></Flex>
      <SelectSeat seats={seats} seatClickHandler={seatClickHandler} />
    </>
  );
}
