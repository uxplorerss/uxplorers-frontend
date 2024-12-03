import { css } from '@emotion/react';
import { selectSeatPropType } from './types';
import Seat from '../Seat';

export const SelectSeat = ({ seats, ...props }: selectSeatPropType) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(9, 1fr);
            gap: 10px;
          `}
        >
          {seats.map((value, index) => {
            if (value.id !== -1) {
              return (
                <Seat
                  key={index}
                  attr={value.status}
                  num={value.id}
                  {...props}
                />
              );
            }
            return <div key={index}>{value.id !== -1 ? value.id : ' '}</div>;
          })}
        </div>
      </div>
    </>
  );
};
