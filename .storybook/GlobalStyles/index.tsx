import { Global } from '@emotion/react';
import { globalStyle } from '../../src/index.styles';
import React from 'react';

export default function GlobalStyles() {
  return <Global styles={globalStyle} />;
}
