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
          minWidth: '900px',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      />
      <div
        css={{
          position: 'absolute',
          top: '6%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          zIndex: '1',
        }}
      >
        <RouteRow
          startName={getTerminalName(startId)!}
          destName={getTerminalName(destIdList[destIdList.length - 1])!}
          outlined
          cx={{
            padding: 0,
          }}
        />
        <TicketDateRow startDate={startDate} />
      </div>
      <Divider
        orientation="horizontal"
        css={{
          position: 'absolute',
          top: '30%',
          maxWidth: '340px',
          zIndex: '1',
        }}
      />
      <div
        css={{
          paddingTop: '40%',
        }}
      >
        <img src={QRCode} />

        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
      </div>
    </Flex>
  );
}
