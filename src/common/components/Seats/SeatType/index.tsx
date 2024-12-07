import { css, useTheme } from '@emotion/react';
import Flex from '../../../components/Flex';
import Typography from '../../Typography';
import { SeatTypeType } from './types';
import { selectTypeStyles } from './index.styles';
import { SeatTypeVariant } from '../SelectSeat/types';
import { useState } from 'react';

const SeatType = ({ onSelectType }: SeatTypeType) => {
  const [type, setType] = useState<SeatTypeVariant>('adults');
  const _onSelectType = (str: SeatTypeVariant) => {
    //TODO : 미안 구조 잘못 짜서 이상한 코딩 구조
    setType(str);
    onSelectType(str);
  };
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Typography variant="title1">좌석을 선택하세요</Typography>
      </div>
      <Flex
        direction={'row'}
        css={css`
          gap: 10px;
          margin-top: 20px;
          margin-bottom: 22px;
        `}
      >
        <div
          css={selectTypeStyles(theme, type !== 'adults')}
          onClick={() => {
            _onSelectType('adults');
          }}
        >
          <Typography
            variant="body4"
            backgroundColor={type === 'adults' ? 'primary' : 'gray'}
          >
            일반
          </Typography>
        </div>
        <div
          css={selectTypeStyles(theme, type !== 'teens')}
          onClick={() => {
            _onSelectType('teens');
          }}
        >
          <Typography
            variant="body4"
            backgroundColor={type === 'teens' ? 'primary' : 'gray'}
          >
            초등생
          </Typography>
        </div>
        <div
          css={selectTypeStyles(theme, type !== 'children')}
          onClick={() => {
            _onSelectType('children');
          }}
        >
          <Typography
            variant="body4"
            backgroundColor={type === 'children' ? 'primary' : 'gray'}
          >
            아동
          </Typography>
        </div>
        <div
          onClick={() => {
            //보훈이 존재하지 않아서 임시로
            _onSelectType('children');
          }}
        >
          <Typography variant="body4" backgroundColor="gray">
            보훈
          </Typography>
        </div>
      </Flex>
    </>
  );
};

export default SeatType;
