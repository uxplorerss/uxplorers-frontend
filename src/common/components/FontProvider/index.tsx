import { FC, ReactNode } from 'react';
import { fontContainer } from './index.styles';

interface FontProviderPropsType {
  children: ReactNode;
}

export default function FontProvider({ children }: FontProviderPropsType) {
  return <div css={fontContainer}>{children}</div>;
}
