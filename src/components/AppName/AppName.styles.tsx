import styled, { css } from 'styled-components';
// import { rgba } from 'polished';
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

type StyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    large?: boolean;
    appColor?: string;
  };

export const AppNameDiv = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: ${(props: StyleProps) => props.theme.colors.text.primary};
    ${(props: StyleProps) =>
      props.appColor &&
      css`
        svg {
          fill: ${props.appColor};
        }
      `}
  `
)<StyleProps>(compose(space, layout, flexbox, border, position, color));

export const AppText = styled(
  styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 450;
    color: ${(props: StyleProps) => props.theme.colors.text.tertiary};
    font-size: ${(props: StyleProps) => props.theme.fontSizes[2]};
    /* font-size: 16px; */
    & :first-child {
      margin-left: 0px;
    }
    margin-left: 8px;
    svg {
      margin-right: 4px;
    }
  `
)<StyleProps>(compose(space, layout, flexbox, border, position, color));
