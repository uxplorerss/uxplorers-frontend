import { css } from '@emotion/react';
import occupiedIcon from '../../../assets/occupied_seat.svg';
import normalIcon from '../../../assets/normal_seat.svg';
import selectedIcon from '../../../assets/selected_seat.svg';
import { SeatPropsType } from './types';
import { useEffect } from 'react';

const Seat = ({ attr, num, onSelectSeat, seats }: SeatPropsType) => {
  const seatClickHandler = () => {
    const now = seats.find((seat) => seat.id === num);
    if (now !== undefined) {
      if (now.status === 'SELECTED') {
        now.status = 'NORMAL';
      } else {
        now.status = 'SELECTED';
      }
      onSelectSeat([...seats]);
    }
  };
  switch (attr) {
    case 'OCCUPIED':
      return (
        <div>
          <img src={occupiedIcon} />
        </div>
      );
    case 'SELECTED':
      return (
        <div
          onClick={() => {
            seatClickHandler();
          }}
          css={css`
            display: flex;
            position: relative;
            cursor: pointer;
          `}
        >
          <img src={selectedIcon} />
          <div
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            {num}
          </div>
        </div>
      );
    case 'NORMAL':
      return (
        <div
          onClick={() => {
            seatClickHandler();
          }}
          css={css`
            display: flex;
            position: relative;
            cursor: pointer;
          `}
        >
          <img src={normalIcon} />
          <div
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            {num}
          </div>
        </div>
      );
    case 'NONE':
      return <div></div>;
  }
};

export default Seat;
