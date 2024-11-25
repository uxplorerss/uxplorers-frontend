import { css } from '@emotion/react';

import { remainSeatPropsType } from './types';
import refreshIcon from '../../../assets/refresh.svg';

export const ReaminSeat = ({ num }: remainSeatPropsType) => {
  return (
    <>
      <div>잔여 {num} / 28석</div>
      <img src={refreshIcon}></img>
    </>
  );
};
