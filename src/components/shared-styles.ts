import { ThemeType } from './../theme';
import styled, { css } from 'styled-components';
import { compose, space, SpaceProps } from 'styled-system';
import { rgba } from 'polished';

export const focusBorder = css`
  transition: 0.2s ease;
  border: 1px solid ${(props) => props.theme.colors.brand.primary};
  outline: none;
`;

export const focusRing = css`
  transition: 0.2s ease;
  outline: 1px solid ${(props) => props.theme.colors.brand.primary};
  /* outline: none; */
`;

export const selectableFocus = css`
  &:focus {
    ${focusRing}
  }
  &:active {
    outline: none !important;
  }
`;

type DividerProps = SpaceProps & { theme?: ThemeType; spacing?: number };

export const Divider = styled.hr<DividerProps>`
  width: calc(100% - ${(props) => (props.spacing || 8) * 2}px);
  margin: 0 ${(props) => props.spacing || 8}px;
  height: 1px;
  border: none;
  background: ${(props) => rgba(props.theme.colors.ui.borderColor, 0.5)};
  ${compose(space)}
`;
