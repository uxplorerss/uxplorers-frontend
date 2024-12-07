import { RouteOptionRowPropsType } from './index.types';
import Flex from '../Flex';
import ArrowRightPrimaryIcon from '../../../assets/ArrowRightPrimaryIcon.svg?react';
import ArrowRightGrayIcon from '../../../assets/ArrowRightGrayIcon.svg?react';
import { buildContainerStyles } from './index.styles';
import { useTheme } from '@emotion/react';
import Typography from '../Typography';

export default function RouteRow({
  startName,
  destName,
  inactive = false,
}: RouteOptionRowPropsType) {
  const theme = useTheme();
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      gap="9px"
      css={buildContainerStyles(theme, inactive)}
    >
      <Typography variant="title2">{startName}</Typography>
      {inactive ? <ArrowRightGrayIcon /> : <ArrowRightPrimaryIcon />}
      <Typography variant="title2">{destName}</Typography>
    </Flex>
  );
}
