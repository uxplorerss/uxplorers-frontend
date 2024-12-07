import type { Preview } from '@storybook/react';

import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import FontProvider from '../src/common/components/FontProvider';
import theme from '../src/theme';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

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
    (Story) => (
      <RouterProvider
        router={createRouter({
          history: createMemoryHistory(),
          routeTree: createRootRoute({
            component: Story,
          }),
        })}
      />
    ),
  ],
};

export default preview;
