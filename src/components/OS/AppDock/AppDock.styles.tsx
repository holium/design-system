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
import { ThemeType } from '../../';

export type AppDockStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    baseColor?: string;
  };

export const AppDockStyle = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    height: 30px;
    padding: 4px 8px;
    border-radius: 30px;
    svg {
      height: 18px;
      width: 18px;
    }
    user-select: none;
    cursor: pointer;
    transition: ${(props: AppDockStyleProps) => props.theme.transition};
    background: ${(props: AppDockStyleProps) =>
      rgba(props.baseColor || props.theme.colors.os.base, 0.08)};
    color: ${(props: AppDockStyleProps) =>
      props.baseColor || rgba(props.theme.colors.os.base, 0.6)};
    /*  */
    /* &:hover {
      background: ${(props: AppDockStyleProps) =>
      rgba(props.baseColor || props.theme.colors.os.base, 0.12)};
      transition: ${(props: AppDockStyleProps) =>
      props.baseColor || props.theme.transition};
    } */
  `
)<AppDockStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DockDivider = styled(
  styled.div`
    height: 16px;
    width: 1px;
    margin: 0 4px;
    border-right: 1px solid
      ${(props: AppDockStyleProps) => rgba(props.theme.colors.os.base, 0.12)};
  `
)<AppDockStyleProps>(compose(space, layout, flexbox, border, position, color));
