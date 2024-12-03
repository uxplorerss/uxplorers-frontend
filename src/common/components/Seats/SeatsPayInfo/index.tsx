import { css } from '@emotion/react';
import ActionBar from '../../ActionBar';
import Card from '../../Card';
import Flex from '../../Flex';
import MainButton from '../../MainButton';
import StickyFooter from '../../StickyFooter';
import theme from '../../../../theme';
import Typography from '../../Typography';
import { SeatsPayInfoPropsType } from './types';
import { useEffect, useState } from 'react';
import { seat } from '../SelectSeat/types';

export default function SeatsPayInfo({ seats }: SeatsPayInfoPropsType) {
  const selected: seat[] = [];
  // const textBuilder = () => {
  //   let str = '';
  //   let adult,
  //     teen,
  //     children = 0;

  // selected.forEach((value) => {});
  //   return str;
  // };
  useEffect(() => {
    selected.length = 0;

    seats
      .filter((value) => value.status === 'SELECTED')
      .forEach((value) => {
        selected.push(value);
      });
  }, []);

  return (
    <StickyFooter
      children={
        <ActionBar
          actionSlot={
            <>
              <Flex width={'100%'}>
                <Flex
                  direction="column"
                  gap={'4px'}
                  align="left"
                  style={{ flexGrow: 1 }}
                >
                  <div>총 결제 금액</div>
                  <div>일반 1, 초등생 1</div>
                </Flex>
                <Flex style={{ flexGrow: 1 }} justify="end">
                  <Typography variant="title1" textAlign="right">
                    30,200원
                  </Typography>
                </Flex>
              </Flex>
              <MainButton>
                <Flex gap="20px">
                  <span>다음</span>
                </Flex>
              </MainButton>
            </>
          }
        />
      }
    ></StickyFooter>
  );
}
