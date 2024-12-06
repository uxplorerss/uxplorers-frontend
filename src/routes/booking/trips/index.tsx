import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/booking/trips/')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /trips/!';
}
