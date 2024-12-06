import { Ticket } from '../../types';
import { seats } from '../seats/fixture';

export const ticket: Ticket = {
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: 'something',
  destIdList: ['해운대'],
  seats,
};

export const tickets: Ticket[] = [
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '동서울',
    destIdList: ['부산해운대'],
    seats,
  },
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '부산해운대',
    destIdList: ['동서울'],
    seats,
  },
];
