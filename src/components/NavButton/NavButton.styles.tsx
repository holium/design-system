import styled, { css } from 'styled-components';
import { theme } from '../../';
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

export type NavButtonProps = SpaceProps & {
  selected?: boolean;
  disabled?: boolean;
  fade?: boolean;
  theme: typeof theme.light;
} & ColorProps &
  LayoutProps &
  TypographyProps;

export const NavButtonStyle = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
    color: ${(props) => props.theme.colors.text.primary};
    background: ${(props) =>
      props.fade ? 'transparent' : props.theme.colors.bg.secondary};
    border: 1px solid
      ${(props) =>
        props.fade ? 'transparent' : props.theme.colors.ui.input.borderColor};
    transition: 0.2s ease;
    border-radius: ${(props) => props.theme.containers.outerBorderRadius}px;
    padding: 0px 6px 0px 6px;
    cursor: pointer;
    -webkit-app-region: no-drag;

    svg {
      pointer-events: none;
      fill: ${(p: Partial<NavButtonProps>) =>
        p.selected
          ? p.theme.colors.brand.primary
          : p.theme.colors.text.primary};
      overflow: visible !important;
    }

    ${(props: any) =>
      props.selected &&
      css`
        border: 1px solid ${(props) => props.theme.colors.ui.input.borderColor};
        background-color: ${(props: Partial<NavButtonProps>) =>
          props.fade
            ? props.theme.colors.bg.secondary
            : props.theme.colors.highlights.bgHighlight};
      `};

    transition: background-color 0.25s ease;
    ${(props: any) =>
      props.disabled &&
      css`
        opacity: 0.5;
        pointer-events: none;
      `};
    :hover {
      transition: background-color 0.25s ease;
      border: 1px solid ${(props) => props.theme.colors.ui.input.borderColor};
      background-color: ${(props: Partial<NavButtonProps>) =>
        props.fade
          ? props.theme.colors.bg.secondary
          : props.theme.colors.highlights.bgHighlight};
    }
    :disabled {
      opacity: 0.5;
    }
  `
)<NavButtonProps>({}, compose(space, color, layout, typography));

export const NavText = styled(styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.text.primary};
`)<Partial<NavButtonProps>>(
  {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  compose(space, color, typography)
);
