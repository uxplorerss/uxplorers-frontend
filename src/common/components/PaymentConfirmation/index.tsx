import { useNavigate } from '@tanstack/react-router';
import { Typography } from '..';
import CheckIcon from '../../../assets/checkIcon.svg?react';
import Flex from '../Flex';
import MainButton from '../MainButton';
import { css } from '@emotion/react';
export default function PaymentConfirmation() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={'24px'}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CheckIcon />
        <Typography
          variant="title2"
          cx={css`
            word-break: keep-all;
            text-align: center;
          `}
        >
          예매가 완료되었어요!
        </Typography>
        <MainButton
          onClick={() => {
            navigate({
              to: '/',
            });
          }}
          cx={css`
            word-break: keep-all;
            text-align: center;
          `}
        >
          홈 화면으로 이동하기
        </MainButton>
      </Flex>
    </Flex>
  );
}
