import { css } from '@emotion/react';
import Flex from '../../../components/Flex';

const SeatType = () => {
  return (
    <>
      <div>좌석을 선택하세요</div>
      <Flex
        direction={'row'}
        css={css`
          gap: 10px;
        `}
      >
        <div>일반</div>
        <div>초등생</div>
        <div>아동</div>
        <div>보훈</div>
      </Flex>
    </>
  );
};

export default SeatType;
