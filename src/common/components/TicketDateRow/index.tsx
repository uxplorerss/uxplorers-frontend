import { TicketDateRowPropsType } from './index.types';
import CalendarIcon from '../../../assets/CalendarIcon.svg?react';
import Flex from '../Flex';
import Typography from '../Typography';
import { Divider } from '../Divider';

const calculateTimeStr = (date: Date) => {
  return date.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
  });
};

const calculateDateStr = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });
};

export default function TicketDateRow({ startDate }: TicketDateRowPropsType) {
  const dateStr = calculateDateStr(startDate);
  const timeStr = calculateTimeStr(startDate);

  return (
    <Flex justify="start" align="center" gap="8px">
      <CalendarIcon />
      <Typography as="div" variant="button1">
        <Flex gap="8px" width="100%" align="stretch">
          {dateStr}
          <Divider orientation="vertical" />
          {timeStr}
        </Flex>
      </Typography>
    </Flex>
  );
}
