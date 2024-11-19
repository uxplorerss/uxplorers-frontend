import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/booking/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /booking/__layout!'
}
