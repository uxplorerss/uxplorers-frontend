import React from 'react';
import { ContentSectionPropsType } from './index.types';
import { contentSection } from './index.styles';

export default function ContentSection({
  children,
  as: Component = 'main',
  cx,
}: ContentSectionPropsType) {
  return <Component css={[contentSection, cx]}>{children}</Component>;
}
