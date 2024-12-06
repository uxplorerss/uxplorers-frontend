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
  const adults: seat[] = [];
  const teens: seat[] = [];
  const children: seat[] = [];
  // const textBuilder = () => {
  //   let str = '';
  //   let adult,
  //     teen,
  //     children = 0;

  // selected.forEach((value) => {});
  //   return str;
  // };
  const [content, setContent] = useState<string[]>([]);
  const pushString = (str: string) => {
    setContent((prev) => {
      return [...prev, str];
    });
  };
  const resetString = () => {
    content.length = 0;
  };
  useEffect(() => {
    resetString();
    adults.length = 0;
    teens.length = 0;
    children.length = 0;
    seats
      .filter((value) => value.status === 'SELECTED')
      .forEach((value) => {
        switch (value.type) {
          case 'adults':
            adults.push(value);
            break;
          case 'teens':
            teens.push(value);
            break;
          case 'children':
            children.push(value);
            break;
          default:
            break;
        }
      });

    if (adults.length > 0) {
      pushString('일반 ' + adults.length);
    }
    if (teens.length > 0) {
      pushString('초등학생 ' + teens.length);
    }
    if (children.length > 0) {
      pushString('아동 ' + children.length);
    }
    console.log(adults, teens, children);
  }, [seats]);

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
                  <Typography variant="title4">총 결제 금액</Typography>

                  <div>
                    {content.map((value, index) => {
                      console.log(value);
                      if (content.length - 1 === index) {
                        return value;
                      }
                      return value + ', ';
                    })}
                  </div>
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
