import styled from 'styled-components';
import { rgba } from 'polished';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  BorderProps,
  SpaceProps,
} from 'styled-system';
import type { ThemeType } from '../../';
import { selectableFocus } from '../shared-styles';

export type TrayButtonStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    baseColor?: string;
    noRestingBg?: boolean;
    circular?: boolean;
    transparency?: number;
  };

export const TrayButtonStyle = styled(
  styled.button`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px;
    border: none;
    border-radius: ${(props: TrayButtonStyleProps) =>
      props.circular ? '26px' : '4px'};
    user-select: none;
    cursor: pointer;
    transition: ${(props: TrayButtonStyleProps) => props.theme.transition};
    /* ${selectableFocus} */
    outline: none;
    div {
      pointer-events: none;
    }
    /* pointer-events: all; */
    background: ${(props: TrayButtonStyleProps) =>
      props.noRestingBg
        ? 'transparent'
        : rgba(
            props.baseColor || props.theme.colors.os.base,
            props.transparency || 0.08
          )};
    color: ${(props: TrayButtonStyleProps) =>
      props.baseColor || rgba(props.theme.colors.os.base, 0.6)};
    /*  */
    &:hover {
      background: ${(props: TrayButtonStyleProps) =>
        rgba(
          props.baseColor || props.theme.colors.os.base,
          props.transparency + 0.04 || 0.12
        )};
      transition: ${(props: TrayButtonStyleProps) =>
        props.baseColor || props.theme.transition};
    }
  `
)<TrayButtonStyleProps>(
  {
    transparency: 0.08,
  },
  compose(space, layout, flexbox, border, position, color)
);
