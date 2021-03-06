import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const Box: any = styled.div<BoxProps>(
  {
    display: 'inline-flex',
    boxSizing: 'border-box',
  },
  compose(space, color, layout, flexbox, border, position)
);
