import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  typography,
} from 'styled-system';

export const AppBody = styled(styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props: any) => props.theme.colors.bg.secondary};
  border: 1px solid ${(props: any) => props.theme.colors.ui.borderColor};
`)({}, compose(space, color, layout, typography));
