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
import MainButton from '../MainButton';
import Typography from '../Typography';
import { css } from '@emotion/react';

export default function TicketCard({
  startId,
  destIdList,
  startDate,
  seats,
  company,
}: TicketCardPropsType) {
  return (
    <div css={{ paddingTop: '50px' }}>
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
            // minWidth: '900px',
            width: '100%',
            height: '100%',
            zIndex: '-1',
          }}
        />
        <div
          css={{
            position: 'absolute',
            top: '8%',
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
          <TicketDateRow startDate={new Date(startDate)} />
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
            paddingTop: '135px',
            height: '360px',
            width: '330px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
              justifyContent: 'space-between',
            }}
          >
            <img src={QRCode} />
            <div
              css={{
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <Typography variant="body2">경유</Typography>
                {destIdList.length > 1 ? (
                  <Typography variant="body2">O</Typography>
                ) : (
                  <Typography variant="body2">X</Typography>
                )}
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <Typography variant="body2">운행회사</Typography>
                <Typography variant="body2">{company}</Typography>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <Typography variant="body2">좌석번호</Typography>
                <Typography variant="body2" cx={{ maxWidth: '80px' }}>
                  {seats.map((seat) => seat.seatNum).join(', ')}
                </Typography>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
              justifyContent: 'space-between',
            }}
          >
            <MainButton>티켓 저장</MainButton>
            <MainButton>결제 내역</MainButton>
          </div>
        </div>
      </Flex>
    </div>
  );
}
