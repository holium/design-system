import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  typography,
} from 'styled-system';
import type { ThemeType } from '../..';

type CardProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    ref?: any;
    selectable?: boolean;
    borderThickness?: number;
    elevation?: 'none' | 'one' | 'two' | 'three' | 'lifted';
    theme?: ThemeType;
  };

export const ColorLine = styled(styled.div`
  position: absolute;
  width: 5px;
  height: inherit;
  border-radius: ${(props) => props.theme.containers.outerBorderRadius}px 0 0
    ${(props) => props.theme.containers.outerBorderRadius}px;
  transition: ${(props) => props.theme.transition};
  background-color: ${(props) => props.theme.colors.brand.primary};
`)(compose(space, color, typography));

export const CardInner = styled(styled.div`
  position: relative;
  width: calc(100% - ${(props: any) => props.padding || '30px'});
  height: calc(100% - ${(props: any) => props.padding || '30px'});
`)(compose(space, color, typography));

export const Card = styled(styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  background: ${(props) => props.theme.colors.bg.secondary};
  border: ${(props: CardProps) =>
    `${props.borderThickness}px solid ${props.theme.colors.ui.input.borderColor}`};
  transition: 0.2s ease;
  border-radius: ${(props) => props.theme.containers.rounderBorderRadius}px;
  box-shadow: ${(props: CardProps) =>
    props.theme.elevations[props.elevation || 'one']};
  -webkit-font-smoothing: antialiased;
  &:hover {
    transition: ${(props) => props.theme.transition};
  }
  ${(props: { selectable?: boolean }) =>
    props.selectable &&
    css`
      transition: ${(props) => props.theme.transition};
      cursor: pointer;
      &:hover {
        transition: ${(props) => props.theme.transition};
        border-color: ${(props) => props.theme.colors.ui.input.borderHover};
      }
    `}
`)<CardProps>({}, compose(space, color, layout, typography));

Card.defaultProps = {
  padding: '5px',
  borderThickness: 1,
};
