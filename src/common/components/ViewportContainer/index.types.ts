import { Interpolation, Theme } from '@emotion/react';
import { ReactNode } from '@tanstack/react-router';

export interface ViewportContainerPropsType {
  children: ReactNode;
  cx?: Interpolation<Theme>;
}
