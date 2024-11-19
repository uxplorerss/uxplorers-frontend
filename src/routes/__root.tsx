import { css, Global } from '@emotion/react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { globalStyle } from '../index.styles';

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === 'production'
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
      <div
        css={css`
          font-family:
            'Pretendard',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
        `}
      >
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/booking">ff</Link>
        </div>
        <hr />
        <Outlet />
      </div>

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});