import { remainSeatPropsType } from './types';
import RefreshIcon from '../../../../assets/refresh.svg?react';

const ReaminSeat = ({ num }: remainSeatPropsType) => {
  return (
    <>
      <div>잔여 {num} / 28석</div>
      <RefreshIcon />
    </>
  );
};

export default ReaminSeat;
