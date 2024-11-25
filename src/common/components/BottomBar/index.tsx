import { bottomBar, buttonContainer } from './index.styles';
import { BottomBarPropsType } from './types';

function BottomBar({ leftSlot, centerSlot, rightSlot }: BottomBarPropsType) {
  return (
    <div css={bottomBar}>
      <div css={buttonContainer}>{leftSlot}</div>
      <div css={buttonContainer}>{centerSlot}</div>
      <div css={buttonContainer}>{rightSlot}</div>
    </div>
  );
}

export default BottomBar;
