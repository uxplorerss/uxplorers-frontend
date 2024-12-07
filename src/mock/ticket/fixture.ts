import { Ticket } from '../../types';
import { seats } from '../seats/fixture';

export const ticket: Ticket = {
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: '010',
  destIdList: ['020'],
  seats,
};

export const tickets: Ticket[] = [
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '010',
    destIdList: ['020'],
    seats,
  },
  {
    startDate: new Date(),
    isExpress: false,
    company: '중앙고속',
    class: 'economy',
    startId: '010',
    destIdList: ['020', '040'],
    seats,
  },
];
