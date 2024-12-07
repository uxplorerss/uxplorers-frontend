import { Bus } from '../../types';
import { fee } from '../fee/fixture';
import { seats } from '../seats/fixture';

// FIXME change distance property
export const outboundBus: Bus = {
  eta: 100,
  distance: 30,
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: '010',
  destIdList: ['040'],
  fee,
  seats,
};

// FIXME change distance property
export const inboundBus: Bus = {
  eta: 100,
  distance: 40,
  startDate: new Date(),
  isExpress: false,
  company: '중앙고속',
  class: 'economy',
  startId: '040',
  destIdList: ['010'],
  fee,
  seats,
};
