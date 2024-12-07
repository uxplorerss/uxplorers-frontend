import { Bus } from '../../types';
import { fee } from '../fee/fixture';
import { seats } from '../seats/fixture';

export const outboundBus: Bus = {
  eta: 10,
  distance: 1000,
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: '010',
  destIdList: ['040'],
  fee,
  seats,
};

export const inboundBus: Bus = {
  eta: 10,
  distance: 1000,
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: '040',
  destIdList: ['010'],
  fee,
  seats,
};
