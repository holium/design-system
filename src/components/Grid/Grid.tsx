import styled from 'styled-components';
import {
  grid,
  GridProps as _GridProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { Box } from '../Box';

export type GridProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  _GridProps;

export const Grid: any = styled(Box)<GridProps>(
  {
    display: 'grid',
  },
  grid
);
