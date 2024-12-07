import OccupiedIcon from '../../../../assets/occupied_seat.svg?react';
import NormalIcon from '../../../../assets/normal_seat.svg?react';
import SelectedIcon from '../../../../assets/selected_seat.svg?react';
import { SeatPropsType } from './types';
import { seatContainer, seatContent } from './index.styled';
import Typography from '../../Typography';
import { useTheme } from '@emotion/react';

const Seat = ({ attr, num, onSelectSeat, selectedType }: SeatPropsType) => {
  const theme = useTheme();
  const handleClick = () => {
    //TODO : type 설정
    onSelectSeat(num!, selectedType);
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
          <div css={seatContent}>
            <Typography
              variant="body3"
              //TODO 여기 하드코딩
              children={'일반'}
              cx={{ color: theme.colors.primary.base }}
            ></Typography>
          </div>
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
