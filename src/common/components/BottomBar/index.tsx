import { bottomBar, center, left, right } from './index.styles';
import { BottomBarPropsType } from './types';

function BottomBar({
  leftContent,
  centerContent,
  rightContent,
}: BottomBarPropsType) {
  return (
    <div css={bottomBar}>
      <div css={left}>{leftContent}</div>
      <div css={center}>{centerContent}</div>
      <div css={right}>{rightContent}</div>
    </div>
  );
}

export default BottomBar;
