import type { ActionBarPropsType } from './index.types';
import Flex from '../Flex';

import { buildActionBar } from './index.styles';
import { useTheme } from '@emotion/react';

export default function ActionBar({
  bodySlot,
  actionSlot,
  cx,
}: ActionBarPropsType) {
  const theme = useTheme();

  return (
    <Flex
      as="section"
      direction="column"
      cx={[buildActionBar(theme), cx]}
      gap="28px"
      width="100%"
      boxSizing="border-box"
    >
      {bodySlot}
      {actionSlot}
    </Flex>
  );
}
