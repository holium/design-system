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

export type TopbarStyleProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const TopbarStyle: any = styled.div<TopbarStyleProps>(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 8,
  },
  compose(space, color, layout, flexbox, border, position)
);

// cursor: pointer;
// transition: ${(props) => props.theme.transition};
// &:hover {
//   rect: {
//     fill: ${(props: SigilStyleProps) => darken(0.05, props.sigilColor)};
//   }

//   background-color: ${(props: SigilStyleProps) =>
//     darken(0.05, props.sigilColor)};
// }
