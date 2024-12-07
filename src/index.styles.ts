import * as fontStyles from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';
import * as normalizedStyles from 'normalize.css';
import { css } from '@emotion/react';

export const globalStyle = css`
  ${fontStyles}
  ${normalizedStyles}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;
