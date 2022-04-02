import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  // SpaceProps,
  // ColorProps,
  // LayoutProps,
  // FlexboxProps,
  // BorderProps,
  // PositionProps,
} from 'styled-system';
// import type { ThemeType } from '../../theme';

export const OSViewPort = styled(styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.bg.primary};
`)(compose(space, color, layout, flexbox, border, position));
