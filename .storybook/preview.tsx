import type { Preview } from '@storybook/react';

import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import React from 'react';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
  />
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
};

export default preview;
