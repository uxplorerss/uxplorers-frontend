import { Global, ThemeProvider } from '@emotion/react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { globalStyle } from '../index.styles';
import theme from '../theme';
import FontProvider from '../common/components/FontProvider';

const TanStackRouterDevtools =
  import.meta.env.MODE === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <FontProvider>
          <Outlet />
        </FontProvider>
      </ThemeProvider>

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
