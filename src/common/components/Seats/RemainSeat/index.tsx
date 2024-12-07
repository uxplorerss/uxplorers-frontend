import { remainSeatPropsType } from './types';
import RefreshIcon from '../../../../assets/refresh.svg?react';

const ReaminSeat = ({ num }: remainSeatPropsType) => {
  return (
    <>
      <div>
        잔여 <b>{num}</b> / 28석
      </div>
      <RefreshIcon style={{ cursor: 'pointer' }} />
    </>
  );
};

export default ReaminSeat;
