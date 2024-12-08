export type Orientation = 'horizontal' | 'vertical';

export interface DividerPropsType extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  decorative?: boolean;
  cx?: boolean;
}
