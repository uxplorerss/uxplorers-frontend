import { css } from '@emotion/react';
import type { ImgHTMLAttributes } from 'react';

const container = css`
  width: 44px;
  height: 44px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

function IconButton({ ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img css={container} {...rest} />;
}

export default IconButton;
