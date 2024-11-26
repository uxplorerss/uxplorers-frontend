import type { Interpolation, Theme } from '@emotion/react';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';

export interface FlexPropsType extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
  wrap?: CSSProperties['flexWrap'];
  width?: CSSProperties['width'];
  css?: Interpolation<Theme>;
  as?: ElementType;
}
