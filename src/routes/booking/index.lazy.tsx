import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/booking/')({
  component: RouteComponent,
});

export default function RouteComponent() {
  return 'Hello /booking/!';
}
