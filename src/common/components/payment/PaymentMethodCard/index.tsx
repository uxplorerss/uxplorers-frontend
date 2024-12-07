import React from 'react';
import SecondaryCard from '../../SecondaryCard';
import Flex from '../../Flex';
import Typography from '../../Typography';
import { useTheme } from '@emotion/react';
import CheckCircleFilledIcon from '../../../../assets/CheckCircleFilledIcon.svg?react';

export default function PaymentMethodCard() {
  const theme = useTheme();
  return (
    <SecondaryCard
      titleSlot="결제수단"
      descriptionSlot="최초 1회 결제수단 등록이 필요해요"
    >
      <>
        <Flex
          direction="column"
          gap="13px"
          cx={{ paddingTop: '25px' }}
          justify="center"
          align="start"
        >
          <Flex direction="row" as="label" gap="8px">
            <Flex
              justify="center"
              align="center"
              css={{
                alignSelf: 'flex-start',
                width: '36px',
                height: '36px',
                boxSizing: 'border-box',
              }}
            >
              <input
                checked
                type="radio"
                name="payment-method"
                value="simple"
                css={{
                  appearance: 'none',
                  border: `1px solid ${theme.colors.gray[1]}`,
                  borderRadius: theme.radii.circle,
                  width: '25px',
                  height: '25px',
                  position: 'relative',

                  '&[type=radio]:checked': {
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    overflow: 'hidden',
                    clip: 'react(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    borderWidth: 0,
                  },
                }}
              />
              <CheckCircleFilledIcon />
            </Flex>
            <Typography variant="body2" cx={{ color: theme.colors.gray.black }}>
              신용/체크 등록 간편결제
            </Typography>
          </Flex>
          <Flex direction="row" as="label" gap="8px">
            <Flex
              justify="center"
              align="center"
              css={{
                alignSelf: 'flex-start',
                width: '36px',
                height: '36px',
                boxSizing: 'border-box',
              }}
            >
              <input
                type="radio"
                name="payment-method"
                value="regular"
                css={{
                  appearance: 'none',
                  border: `1px solid ${theme.colors.gray[1]}`,
                  borderRadius: theme.radii.circle,
                  width: '25px',
                  height: '25px',
                  position: 'relative',

                  '&[type=radio]:checked': {
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    overflow: 'hidden',
                    clip: 'react(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    borderWidth: 0,
                  },
                }}
              />
            </Flex>

            <Flex direction="column" gap="5px" align="start">
              <Typography
                variant="body2"
                cx={{ color: theme.colors.gray.black, paddingTop: '8px' }}
                as="div"
              >
                신용/체크 일반결제
              </Typography>
              <Typography
                variant="body4"
                cx={{ color: theme.colors.gray[4] }}
                as="div"
              >
                (카드번호 입력 결제)
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </>
    </SecondaryCard>
  );
}
