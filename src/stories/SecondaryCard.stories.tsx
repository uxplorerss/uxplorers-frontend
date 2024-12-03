import type { Meta, StoryObj } from '@storybook/react';
import SecondaryCard from '../common/components/SecondaryCard';
import Flex from '../common/components/Flex';
import { Button, Typography } from '../common/components';
import CheckCircleFilledIcon from '../assets/CheckCircleFilledIcon.svg?react';
import theme from '../theme';
import RightArrowIcon from '../assets/RightArrowIcon.svg?react';
import { buildInput } from '../common/components/Input/index.styles';
import MileageIcon from '../assets/MileageIcon.svg?react';

const meta = {
  title: 'common/SecondaryCard',
  component: SecondaryCard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentMethod1: Story = {
  args: {
    titleSlot: '결제수단',
    descriptionSlot: '최초 1회 결제수단 등록이 필요해요',
    children: (
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
    ),
  },
};

export const PaymentMethod2: Story = {
  args: {
    titleSlot: '결제수단',
    descriptionSlot: '최초 1회 결제수단 등록이 필요해요',
    children: (
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
    ),
  },
};

export const Coupon: Story = {
  args: {
    titleSlot: '쿠폰 및 GO마일리지',
    children: (
      <>
        <Button
          cx={[
            buildInput(theme),
            {
              width: '100%',
              margin: '14px 0 12px 0',
            },
          ]}
        >
          <Flex justify="space-between" width="100%">
            <Typography
              as="div"
              variant="body4"
              cx={{
                color: theme.colors.gray[1],
              }}
            >
              적용 가능한 쿠폰 0
            </Typography>
            <Flex
              justify="center"
              align="center"
              cx={{
                width: '24px',
                height: '24px',
              }}
            >
              <RightArrowIcon />
            </Flex>
          </Flex>
        </Button>
        <Flex justify="start" align="center" gap="8px">
          <MileageIcon />
          <Typography variant="body4" cx={{ color: theme.colors.gray[0] }}>
            쿠폰 및 GO마일리지 0M
          </Typography>
        </Flex>
      </>
    ),
  },
};
