import Flex from '../Flex';
import { bottomBar, buttonContainer } from './index.styles';
import { BottomBarPropsType } from './types';

function BottomBar({ leftSlot, centerSlot, rightSlot }: BottomBarPropsType) {
  return (
    <div css={bottomBar}>
      <Flex css={buttonContainer}>{leftSlot}</Flex>
      <Flex css={buttonContainer}>{centerSlot}</Flex>
      <Flex css={buttonContainer}>{rightSlot}</Flex>
    </div>
  );
}

export default BottomBar;
