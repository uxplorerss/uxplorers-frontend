export type TypographyVariant =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button1'
  | 'caption1';

export interface TypographyPropsType {
  variant: TypographyVariant;
  children: React.ReactNode;
  as?: React.ElementType;
}
