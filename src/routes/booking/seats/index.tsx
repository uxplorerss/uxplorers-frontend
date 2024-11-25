import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { css } from '@emotion/react';
import TopBar from '../../../common/components/TopBar';
import {
  SeatPropsType,
  SeatVariant,
} from '../../../common/components/Seats/types';
import { useState, useEffect } from 'react';
import Seat from '../../../common/components/Seats';

export const Route = createFileRoute('/booking/seats/')({
  component: IndexComponent,
});

interface seat {
  id: number | undefined;
  status: SeatVariant;
}
function IndexComponent() {
  const getSeatMap = () => {};

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
  const [selected, setSelected] = useState<number>();
  useEffect(() => {
    console.log(seats);
  }, [seats]);
  useEffect(() => {
    if (selected !== undefined) {
      console.log(selected, seats[selected - 1].status);
      const now = seats.find((seat) => seat.id === selected);
      if (now !== undefined) {
        if (now.status === 'SELECTED') {
          now.status = 'NORMAL';
        } else {
          now.status = 'SELECTED';
        }
        setSeats([...seats]);
      }
    }
    console.log(seats);
  }, [selected]);
  useEffect(() => {
    initSeats();
  }, []);
  // TODO 예매 좌석 선택 페이지 구현하기

  const seatClickHandler = () => {
    console.log('CLICK!');
  };
  return (
    <>
      <TopBar />
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
                  handler={setSelected}
                ></Seat>
              );
            }
            return <div key={index}>{value.id !== -1 ? value.id : ' '}</div>;
          })}
          {/* <div>1</div>
          <div>2</div>
          <div></div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div></div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div></div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div></div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div></div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div></div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div></div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div></div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div> */}
        </div>
      </div>
    </>
  );
}
