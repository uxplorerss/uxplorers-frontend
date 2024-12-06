import { Ticket } from '../../types';
import { seats } from '../seats/fixture';

export const ticket: Ticket = {
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: 'something',
  destId: ['해운대'],
  seats,
};

export const tickets: Ticket[] = [
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '동서울',
    destId: ['부산해운대'],
    seats,
  },
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '부산해운대',
    destId: ['동서울'],
    seats,
  },
];
