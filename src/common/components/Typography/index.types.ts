export type TypographyVariant =
  | 'typography1'
  | 'typography2'
  | 'typography3'
  | 'typography4'
  | 'typography5'
  | 'typography6'
  | 'title'
  | 'body';

export interface TypographyPropsType {
  variant: TypographyVariant;
  children: React.ReactNode;
  as?: React.ElementType;
}
