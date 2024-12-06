import { css } from '@emotion/react';
import Flex from '../../../components/Flex';
import Typography from '../../Typography';
import { SeatTypeType } from './types';

const SeatType = ({ onSelectType }: SeatTypeType) => {
  return (
    <>
      <div
        css={css`
          margin-top: 11px;
        `}
      >
        <Typography variant="title1">좌석을 선택하세요</Typography>
      </div>
      <Flex
        direction={'row'}
        css={css`
          gap: 10px;
        `}
      >
        <div
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            onSelectType('adults');
          }}
        >
          일반
        </div>
        <div
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            onSelectType('teens');
          }}
        >
          초등생
        </div>
        <div
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            onSelectType('children');
          }}
        >
          아동
        </div>
        <div
          onClick={() => {
            //보훈이 존재하지 않아서 임시로
            onSelectType('children');
          }}
        >
          보훈
        </div>
      </Flex>
    </>
  );
};

export default SeatType;
