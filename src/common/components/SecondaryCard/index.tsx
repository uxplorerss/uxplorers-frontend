import React from 'react';
import { SecondaryCardPropsType } from './index.types';
import Flex from '../Flex';
import { cardContainer } from './index.styles';
import Typography from '../Typography';
import { useTheme } from '@emotion/react';

export default function SecondaryCard({
  titleSlot,
  descriptionSlot,
  children,
}: SecondaryCardPropsType) {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      align="start"
      justify="start"
      boxSizing="border-box"
      width="100%"
      cx={{
        padding: '20px 18px',
        border: `1px solid ${theme.colors.gray[2]}`,
        borderRadius: theme.radii.normal,
      }}
    >
      {titleSlot && (
        <Typography
          as="h2"
          variant="title3"
          cx={{ color: theme.colors.gray.black, margin: 0 }}
        >
          {titleSlot}
        </Typography>
      )}
      {descriptionSlot && (
        <Typography
          as="div"
          variant="body4"
          cx={{ color: theme.colors.gray[4], marginTop: '10px' }}
        >
          {descriptionSlot}
        </Typography>
      )}
      {children}
    </Flex>
  );
}
