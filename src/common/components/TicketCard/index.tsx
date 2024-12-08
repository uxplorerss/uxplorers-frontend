import React from 'react';
import TicketDateRow from '../TicketDateRow';
import RouteRow from '../RouteRow';
import Flex from '../Flex';
import { ticketCardStyles } from './index.styles';
import QRCode from '../../../assets/QRCode.jpg';
import Subtract from '../../../assets/Subtract.svg?react';
import { Divider } from '../Divider';
import { TicketCardPropsType } from './index.types';
import { getTerminalName } from '../../../lib/terminal';

export default function TicketCard({
  startId,
  destIdList,
  startDate,
  seats,
  company,
}: TicketCardPropsType) {
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
          top: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      />
      <RouteRow
        startName={getTerminalName(startId)!}
        destName={getTerminalName(destIdList[destIdList.length - 1])!}
        outlined
        cx={{
          padding: 0,
        }}
      />
      <TicketDateRow startDate={startDate} />
      <Divider orientation="horizontal" />
      <img src={QRCode} />

      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
    </Flex>
  );
}
