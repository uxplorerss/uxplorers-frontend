import type { Preview } from '@storybook/react';

import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from '../src/index.styles';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import FontProvider from '../src/common/components/FontProvider';
import theme from '../src/theme';
import React from 'react';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = () => <Global styles={globalStyle} />;

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
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
    (Story) => (
      <FontProvider>
        <Story />
      </FontProvider>
    ),
  ],
};

export default preview;
