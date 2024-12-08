import { RouteOptionRowPropsType } from './index.types';
import Flex from '../Flex';
import ArrowRightWhiteIcon from '../../../assets/ArrowRightWhiteIcon.svg?react';
import ArrowRightGrayIcon from '../../../assets/ArrowRightGrayIcon.svg?react';
import ArrowRightPrimaryIcon from '../../../assets/ArrowRightPrimaryIcon.svg?react';
import { buildContainerStyles } from './index.styles';
import { useTheme } from '@emotion/react';
import Typography from '../Typography';

export default function RouteRow({
  startName,
  destName,
  inactive = false,
  outlined = false,
  cx,
}: RouteOptionRowPropsType) {
  const theme = useTheme();
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      gap="9px"
      css={[buildContainerStyles(theme, inactive, outlined), cx]}
    >
      <Typography variant="title2">{startName}</Typography>
      {inactive && <ArrowRightGrayIcon />}
      {!inactive && outlined && <ArrowRightPrimaryIcon />}
      {!inactive && !outlined && <ArrowRightWhiteIcon />}
      <Typography variant="title2">{destName}</Typography>
    </Flex>
  );
}
