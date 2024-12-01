import { createFileRoute } from '@tanstack/react-router';
import TopBar from '../../../common/components/TopBar';
import { useState } from 'react';

import { seat } from '../../../common/components/Seats/SelectSeat/types';
import { SelectSeat } from '../../../common/components/Seats/SelectSeat';
import Flex from '../../../common/components/Flex';
import SeatType from '../../../common/components/Seats/SeatType';
import ReaminSeat from '../../../common/components/Seats/RemainSeat';
import SeatsPayInfo from '../../../common/components/Seats/SeatsPayInfo';

export const Route = createFileRoute('/booking/seats/')({
  component: IndexComponent,
});

function IndexComponent() {
  const handleSelectSeat = (num: number) => {
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
  const initSeats = (): seat[] => {
    const tmp: seat[] = [];
    seatMap.forEach((value) => {
      if (value !== -1) {
        tmp.push({ id: value, status: 'NORMAL' });
      } else {
        tmp.push({ id: value, status: 'NONE' });
      }
    });
    return tmp;
  };

  const seatMap: (number | undefined)[] = [
    1, 2, -1, 3, 4, 5, -1, 6, 7, 8, -1, 9, 10, 11, -1, 12, 13, 14, -1, 15, 16,
    17, -1, 18, 19, 20, -1, 21, 22, 23, -1, 24, 25, 26, 27, 28,
  ];

  const [seats, setSeats] = useState<seat[]>(initSeats());
  const available =
    28 - seats.filter((value) => value.status === 'SELECTED').length;
  return (
    <>
      <TopBar />
      <Flex children={<ReaminSeat num={available} />}></Flex>
      <Flex direction={'column'} children={<SeatType />}></Flex>
      <SelectSeat seats={seats} onSelectSeat={handleSelectSeat} />
      <SeatsPayInfo seats={seats} />
    </>
  );
}
