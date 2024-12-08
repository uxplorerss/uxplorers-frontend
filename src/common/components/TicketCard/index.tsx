import React from 'react';
import TicketDateRow from '../TicketDateRow';
import RouteRow from '../RouteRow';
import Flex from '../Flex';
import { ticketCardStyles } from './index.styles';
import QRCode from '../../../assets/QRCode.jpg';
import Subtract from '../../../assets/Subtract.svg?react';
import { Divider } from '../Divider';

export default function TicketCard() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      cx={ticketCardStyles}
      width="100%"
      boxSizing="border-box"
      gap="8px"
    >
      <Subtract
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      />
      <RouteRow
        startName={'동서울'}
        destName={'부산'}
        outlined
        cx={{
          padding: 0,
        }}
      />
      <TicketDateRow startDate={new Date()} />
      <Divider orientation="horizontal" />
      <img src={QRCode} />

      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
    </Flex>
  );
}
