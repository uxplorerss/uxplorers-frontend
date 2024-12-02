import { Typography } from '..';
import CheckIcon from '../../../assets/checkIcon.svg?react';
import Flex from '../Flex';
export default function PaymentConfirmation() {
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
          variant="title1"
          children={'예매가 완료되었어요!'}
        ></Typography>
      </Flex>
    </Flex>
  );
}
