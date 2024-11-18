import 'normalize.css';
import { globalStyle } from './index.styles';
import { css, Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <div
        css={css`
          font-family: 'Pretendard';
          font-weight: 500;
        `}
      >
        Hello World!
      </div>
    </>
  );
}

export default App;
