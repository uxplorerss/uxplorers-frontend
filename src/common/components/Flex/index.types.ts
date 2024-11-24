import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

export interface FlexPropsType extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
  wrap?: CSSProperties['flexWrap'];
  width?: CSSProperties['width'];
}
