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

export type SimpleAppButtonProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps & {
    disabled?: boolean;
    selected?: boolean;
  };

export const AppButtonStyle = styled(
  styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    -webkit-app-region: no-drag;
    height: ${(p: { expanded: boolean }) => (p.expanded ? '65px' : '26px')};
    width: ${(p: { expanded: boolean }) => (p.expanded ? '65px' : '26px')};
    border-radius: ${(p: { expanded: boolean }) =>
      p.expanded ? '6px' : '3px'};
    svg {
      pointer-events: none;
      ${(p: { expanded: boolean }) =>
        !p.expanded &&
        css`
          height: calc(100% - 6px);
          width: calc(100% - 6px);
        `}

      fill: ${(p: any) =>
        p.selected ? p.theme.colors.brand.primary : p.theme.colors.icon.app};
      overflow: visible !important;
    }
    transition: background-color 0.25s ease;
    ${(props: any) =>
      props.disabled &&
      css`
        opacity: 0.5;
        pointer-events: none;
      `};
    :hover {
      transition: background-color 0.25s ease;
      background-color: ${(props) => props.theme.colors.highlights.bgHighlight};
    }
    :disabled {
      opacity: 0.5;
    }
  `
)<SimpleAppButtonProps>({}, compose(space, color, layout, typography));

export const AppText = styled(styled.div`
  padding-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.text.primary};
`)<SimpleAppButtonProps>(
  {
    userSelect: 'none',
  },
  compose(space, color, typography)
);
