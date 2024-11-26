import type { ActionBarPropsType } from './index.types';
import Flex from '../Flex';

import { actionBar } from './index.styles';

export default function ActionBar({
  bodySlot,
  actionSlot,
  cx,
}: ActionBarPropsType) {
  return (
    <Flex as="section" direction="column" cx={[actionBar, cx]} gap="28px">
      {bodySlot}
      {actionSlot}
    </Flex>
  );
}
