import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  BorderProps,
} from 'styled-system';
import { selectableFocus } from '../../shared-styles';

export type SigilStyleProps = BorderProps & {
  clickable?: boolean;
  active?: boolean;
  sigilColor?: string;
  sigilSize?: number;
  borderRadiusOverride?: string;
  theme: any;
};

export const AvatarWrapper = styled(styled.div`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  vertical-align: middle;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  overflow: visible;
  pointer-events: auto;
  img {
    pointer-events: ${(props) => (props.clickable ? 'none' : 'inherit')};
  }
  transition: ${(props) => props.theme.transition};
  ${selectableFocus}

  ${(props: SigilStyleProps) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`)<SigilStyleProps>(compose(space, layout, flexbox, border, position, color));

export const SigilStyle = styled(
  styled.div`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    vertical-align: middle;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    overflow: visible;
    height: ${(props) => props.sigilSize}px;
    background-color: ${(props) => props.sigilColor};
    border-width: 0px;
    border-radius: ${(props) => props.borderRadiusOverride || '4px'};
    transition: ${(props) => props.theme.transition};
    pointer-events: auto;

    svg {
      pointer-events: ${(props) => (props.clickable ? 'none' : 'inherit')};
    }

    ${selectableFocus}

    ${(props: SigilStyleProps) =>
      props.clickable &&
      css`
        cursor: pointer;
      `}
  `
)<SigilStyleProps>(compose(space, layout, flexbox, border, position, color));
