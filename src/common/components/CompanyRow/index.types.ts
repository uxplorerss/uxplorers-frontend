import { Interpolation, Theme } from '@emotion/react';

export interface CompanyRowPropsType {
  destId: string[];
  company: string;
  cx: Interpolation<Theme>;
}
