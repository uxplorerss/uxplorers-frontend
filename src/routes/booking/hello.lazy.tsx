import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/booking/hello')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /booking/hello!12321';
}
