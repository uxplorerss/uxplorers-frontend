import { css, Global, ThemeProvider } from '@emotion/react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
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
          <div className="p-2 flex gap-2">
            <Link to="/">승차권 확인</Link>
            <br />
            <Link to="/booking">예매하기</Link>
            <br />
            <Link to="/account">마이페이지</Link>
          </div>
          <hr />
          <Outlet />
        </FontProvider>
      </ThemeProvider>

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
