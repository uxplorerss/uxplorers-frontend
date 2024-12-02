import OccupiedIcon from '../../../../assets/occupied_seat.svg?react';
import NormalIcon from '../../../../assets/normal_seat.svg?react';
import SelectedIcon from '../../../../assets/selected_seat.svg?react';
import { SeatPropsType } from './types';
import { seatContainer, seatContent } from './index.styled';

const Seat = ({ attr, num, onSelectSeat }: SeatPropsType) => {
  const handleClick = () => {
    onSelectSeat(num!);
  };

  switch (attr) {
    case 'OCCUPIED':
      return (
        <div>
          <OccupiedIcon />
        </div>
      );
    case 'SELECTED':
      return (
        <div onClick={handleClick} css={seatContainer}>
          <SelectedIcon />
          <div css={seatContent}>{num}</div>
        </div>
      );
    case 'NORMAL':
      return (
        <div onClick={handleClick} css={seatContainer}>
          <NormalIcon />
          <div css={seatContent}>{num}</div>
        </div>
      );
    case 'NONE':
      return <div></div>;
  }
};

export default Seat;
