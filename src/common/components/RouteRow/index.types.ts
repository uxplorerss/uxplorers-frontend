import { Interpolation, Theme } from '@emotion/react';

export interface RouteOptionRowPropsType {
  startName: string;
  destName: string;
  inactive?: boolean;
  outlined?: boolean;
  cx?: Interpolation<Theme>;
}
