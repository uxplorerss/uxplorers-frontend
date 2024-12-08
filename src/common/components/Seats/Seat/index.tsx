import OccupiedIcon from '../../../../assets/occupied_seat.svg?react';
import NormalIcon from '../../../../assets/normal_seat.svg?react';
import SelectedIcon from '../../../../assets/selected_seat.svg?react';
import { SeatPropsType } from './types';
import { seatContainer, seatContent } from './index.styled';
import Typography from '../../Typography';
import { useTheme } from '@emotion/react';

const Seat = ({
  attr,
  num,
  onSelectSeat,
  selectedType,
  type,
}: SeatPropsType) => {
  const theme = useTheme();
  const handleClick = () => {
    //TODO : type 설정
    onSelectSeat(num!, selectedType);
  };

  let selectedTypeName = '일반';
  switch (type) {
    case 'adults':
      selectedTypeName = '일반';
      break;
    case 'children':
      selectedTypeName = '아동';
      break;
    case 'teens':
      selectedTypeName = '초등생';
      break;
  }

  switch (attr) {
    case 'OCCUPIED':
      return (
        <div>
          <OccupiedIcon width={'76px'} height={'70px'} />
        </div>
      );
    case 'SELECTED':
      return (
        <div onClick={handleClick} css={seatContainer}>
          <SelectedIcon width={'76px'} height={'70px'} />
          <div css={seatContent}>
            <Typography
              variant="body4"
              children={selectedTypeName}
              cx={{ color: theme.colors.primary.base, wordBreak: 'keep-all' }}
            ></Typography>
          </div>
        </div>
      );
    case 'NORMAL':
      return (
        <div onClick={handleClick} css={seatContainer}>
          <NormalIcon width={'76px'} height={'70px'} />
          <div css={seatContent}>{num}</div>
        </div>
      );
    case 'NONE':
      return <div></div>;
  }
};

export default Seat;
