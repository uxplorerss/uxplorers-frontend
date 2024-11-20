import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { inputStyle} from './index.styles';
export const Route = createFileRoute('/booking/tickets/')({
  component: RouteComponent,
});

export default function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  return (
    <input css={inputStyle} placeholder="Enter your text here" />
  );
}
