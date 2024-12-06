import { Interpolation, Theme } from '@emotion/react';

export interface CompanyRowPropsType {
  destIdList: string[];
  company: string;
  cx?: Interpolation<Theme>;
}
